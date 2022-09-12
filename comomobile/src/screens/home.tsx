import { View, Button, Keyboard, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import HomeHeader from '../components/home-header';
import Input from '../components/input';
import commonStyles from '../styles/common';
import Row from '../components/atoms/row';
import { LightLabel, Spacer } from '../components/atoms';
import { hp, wp } from '../utils/responsive';
import { useNavigation } from '@react-navigation/native';
import { MAIN_ROUTES } from '../navigation/ROUTES';


export default function MyOrders() {
  const navigation = useNavigation();
  const [name, setName] = useState<string>('');

  const onPressButton = () => {
    Keyboard.dismiss();
    if (!name) {
      ToastAndroid.show('Please enter your name', ToastAndroid.SHORT);
      return;
    }
    //@ts-ignore
    navigation.navigate(MAIN_ROUTES.SCAN, { name });
  };

  const onViewMyScans = () => {
    Keyboard.dismiss();
    if (!name) {
      ToastAndroid.show('Please enter your name', ToastAndroid.SHORT);
      return;
    }
    //@ts-ignore
    navigation.navigate(MAIN_ROUTES.MY_SCANS, { name });
  };

  return (
    <View style={commonStyles.screen}>
      <HomeHeader label={'My Scans'} />

      <View
        style={{
          paddingHorizontal: wp('4'),
          marginTop: hp('2'),
        }}
      >
        <Row>
          <>
            <LightLabel>Your Name :</LightLabel>
            <Input
              placeHolder="Please Enter your name"
              value={name}
              handleChange={(val: string) => setName(val)} />
          </>
        </Row>
        <Spacer
          style={{
            marginVertical: hp('2'),
          }}
        />
        <Button title="Scan & Go" onPress={onPressButton} />
        <Spacer style={{
          marginVertical: hp('5'),
        }} />
        <Button title="View My Scans" onPress={onViewMyScans} />
      </View>
    </View>
  );
}
