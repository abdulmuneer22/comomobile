
import styled from "styled-components";
import { hp, wp } from "../../utils/responsive";
import colors from "../../config/colors";

// @ts-ignore
export const HeaderlighthomeHeader = styled.View`
  width: ${wp("100")};
  background-color: ${colors.primary01};
  padding-right: 24px;
  padding-left: 24px;
  padding-top: ${hp("0.5")};
`;

// @ts-ignore
export const LightLabel = styled.Text`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  line-height: 19.6px;
  letter-spacing: 0px;
`;

// @ts-ignore
export const Spacer = styled.View`
  flex: 1;
`;

// @ts-ignore
export const TitleText = styled.Text`
  font-size: 18px;
  letter-spacing: 0px;
  color: #1b1b1b;
`;
