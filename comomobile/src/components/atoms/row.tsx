import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  children?: JSX.Element;
  customStyles?: any
}

export default function Row({ children, customStyles }: Props) {
  return <View style={[styles.wrapper, customStyles]}>{children}</View>;
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
});
