import { View, ToastAndroid, Button } from 'react-native';
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
import { LightLabel, Spacer } from '../components/atoms';
import { hp } from '../utils/responsive';
const ERROR_MESSAGE = 'Sorry Failed to scan the QR Code, Please try again'

export default function BarCodeRecieved() {
  const { params }: any = useRoute()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const config = useSelector((state) => getAppConfig(state))
  const { name, code }: any = params || {}
  const [errorMessage, setError] = useState("")
  const sendMessage = onSendSMS()
  const navigation = useNavigation()


  const recordScanRequest = useCallback(async () => {
    let payload = {
      name,
      code
    }
    let { response, error }: any = await dispatch(recordScan(config, payload))

    if (error) {
      ToastAndroid.show(ERROR_MESSAGE, ToastAndroid.SHORT)
      setError(ERROR_MESSAGE)
      setIsLoading(false)
      return
    }

    const { phoneNumber, message } = response?.message || {}
    if (!phoneNumber || !message) {
      ToastAndroid.show(ERROR_MESSAGE, ToastAndroid.SHORT)
      setError(ERROR_MESSAGE)
      return
    }
    const textMessage = String(message).replace("{{Full Name}}", name)
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

  const onTryAgain = () => {
    navigation.goBack()
  }


  return (
    <View style={commonStyles.screen}>
      <HomeHeader label={""} />
      {
        isLoading ? <Loader /> : null
      }

      {
        errorMessage ?
          <>
            <LightLabel>{errorMessage}</LightLabel>
            <Spacer style={{ paddingVertical: hp('2') }} />
            <Button title='Try Again' onPress={onTryAgain} />
          </>
          : null
      }

    </View >
  );
}
