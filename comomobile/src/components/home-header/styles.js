import { StyleSheet } from "react-native";
import { wp } from "../../utils/responsive";

import FoodAppColors from "../themes/food/colors";

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: wp(100),
  },
  lightLabel: {
    marginBottom: 5,
    color: FoodAppColors.textDarkWhite2,
  },
  semiLightLabel: {
    fontSize: 16,
    color: FoodAppColors.whiteTwo,
  },
  deliveryLocationWrapper: {
    alignItems: "flex-end",
  },
});

export default styles;
