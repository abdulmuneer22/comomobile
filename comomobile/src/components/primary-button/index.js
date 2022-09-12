import React from "react";
import styled from "styled-components";
import Colors from "../../config/colors";

const ButtonlightprimaryButton = styled.TouchableOpacity`
  flex: 1;
  border-radius: 8px;
  background-color: ${Colors.primary01};
  justify-content: center;
`;

const ButtonText = styled.Text`
  font-family: Averta;
  font-size: 16px;
  font-style: normal;
  letter-spacing: 0px;
  text-align: center;
  color: ${Colors.textLightWhite};
`;

export default function PrimaryButton({
  styles,
  textStyles,
  label,
  onPress,
  isDisabled,
  onDisabledPress = null,
}) {
  return (
    <ButtonlightprimaryButton
      disabled={!onDisabledPress && isDisabled}
      style={[styles, isDisabled && { backgroundColor: Colors.blueyGrey }]}
      onPress={isDisabled ? onDisabledPress : onPress}
    >
      <ButtonText style={textStyles}>{label}</ButtonText>
    </ButtonlightprimaryButton>
  );
}
