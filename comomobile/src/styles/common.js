import { StyleSheet } from "react-native";
import { hp, wp } from "../utils/responsive";
import colors from "../config/colors";

const commonStyles = StyleSheet.create({
  screnWrapper: {
    paddingHorizontal: wp(5),
    paddingVertical: hp(1),
    flex: 1,
  },
  flex1: {
    flex: 1,
  },
  inputWrapper: {
    marginBottom: hp(3),
  },
  screen: {
    backgroundColor: colors.whiteTwo,
    flex: 1,
  },
});

export default commonStyles;
