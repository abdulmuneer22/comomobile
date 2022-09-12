import PropTypes from "prop-types";
import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { hp, wp } from "../../utils/responsive";

export default function Loader({ wrapperStyle, size }) {
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <ActivityIndicator color="#ff8500" size={size || "large"} />
    </View>
  );
}

Loader.propTypes = {
  size: PropTypes.string,
  wrapperStyle: PropTypes.any,
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "rgba(1,1,1,0.3)",
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
    width: wp(100),
    height: hp(100),
  },
});
