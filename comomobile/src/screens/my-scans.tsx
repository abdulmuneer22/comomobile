import { View, FlatList, Text } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import HomeHeader from '../components/home-header';
import commonStyles from '../styles/common';
import { LightLabel, TitleText } from '../components/atoms';
import { hp, wp } from '../utils/responsive';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getMyScans } from '../store/actions';
import { getAppConfig } from '../store/app.selectors';
import Loader from '../components/loader';

const EmptyList = () =>
  <View style={commonStyles.screnWrapper}>
    <TitleText>No Data Found</TitleText>
  </View>


export default function MyScans() {
  const dispatch = useDispatch()
  const config = useSelector((state) => getAppConfig(state))
  const { params }: any = useRoute()
  const { name }: any = params || {}
  const { data, isLoading } = useSelector((state: any) => state?.scansReducer) || {}


  const getMyScansRequest = useCallback(() => {
    dispatch(getMyScans(config, name))
  }, [config, name, dispatch])

  useEffect(() => {
    getMyScansRequest()
  }, [getMyScansRequest])


  const renderItem = ({ item }: any) => (
    <View style={{
      paddingHorizontal: wp('2'),
      marginBottom: hp('3')
    }}>
      <LightLabel style={{
        fontSize: 20,
        paddingBottom: hp('1'),
      }}>
        {item?.message?.dish}
      </LightLabel>
      <Text>{item?.message?.message} </Text>
    </View>
  );

  return (
    <View style={commonStyles.screen}>
      <HomeHeader label={'My Scans'} />
      <FlatList
        data={data}
        contentContainerStyle={{
          marginTop: hp('2')
        }}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={EmptyList}
      />
      {
        isLoading ? <Loader /> : null
      }
    </View>
  );
}
