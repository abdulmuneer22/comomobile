import { StyleSheet } from "react-native";
import { hp, wp } from "../utils/responsive";
import colors from "../config/colors";

const commonStyles = StyleSheet.create({
  bottomButtonWrapper: {
    width: wp(70),
    height: hp(5.5),
    alignSelf: "center",
    marginVertical: hp(1),
  },
  screnWrapper: {
    paddingHorizontal: wp(5),
    paddingVertical: hp(1),
    flex: 1,
  },
  flex1: {
    flex: 1,
  },
  formInput: {
    fontFamily: "Averta",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 19.6,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.black,
    flex: 1,
  },
  inputWrapper: {
    marginBottom: hp(3),
  },
  formError: {
    fontSize: 12,
    color: colors.pastelRed,
  },
  radioWrapper: {
    marginHorizontal: 0,
    flex: 1,
    marginRight: wp(3),
  },
  screen: {
    backgroundColor: colors.whiteTwo,
    flex: 1,
  },
  emptyWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyImage: {
    width: wp(60),
    height: hp(60),
  },
});

export default commonStyles;
