import { View, ToastAndroid } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import HomeHeader from '../components/home-header';
import commonStyles from '../styles/common';
import Loader from '../components/loader';
import { useDispatch, useSelector } from 'react-redux';
import { recordScan } from '../store/actions'
import { getAppConfig } from '../store/app.selectors';
import onSendSMS from '../utils/onSendSMS';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MAIN_ROUTES } from '../navigation/ROUTES';

export default function BarCodeRecieved() {
  const { params }: any = useRoute()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const config = useSelector((state) => getAppConfig(state))
  const { name, code }: any = params || {}
  const sendMessage = onSendSMS()
  const navigation = useNavigation()


  const recordScanRequest = useCallback(async () => {
    let payload = {
      name,
      code
    }
    let { response, error }: any = await dispatch(recordScan(config, payload))

    if (error) {
      ToastAndroid.show('Sorry Failed to scan the QR Code, Please try again', ToastAndroid.SHORT)
      return
    }

    const { phoneNumber, message } = response?.message || {}
    if (!phoneNumber || !message) {
      ToastAndroid.show('Sorry Failed to scan the QR Code, Please try again', ToastAndroid.SHORT)
      return
    }
    const textMessage = `${message},${name}`
    sendMessage(phoneNumber, textMessage)
    setIsLoading(false)
    navigation.reset({
      index: 0,
      routes: [{ name: MAIN_ROUTES.HOME }],
    });

  }, [config, dispatch, name, code, sendMessage, navigation])


  useEffect(() => {
    if (name && code) {
      setIsLoading(true)
      recordScanRequest()
    }
  }, [name, code, recordScanRequest])


  return (
    <View style={commonStyles.screen}>
      <HomeHeader />
      {
        isLoading ? <Loader /> : null
      }

    </View >
  );
}
