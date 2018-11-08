// @flow

import * as React from "react";
import { Text as RNText } from "react-native";

import styled from "../styled";
import defaultTokens from "../defaultTokens";
import iconsMap from "./icons.json";

import type { Props } from "./index";

const StyledText = styled(RNText, props => {
  const { theme } = props;
  return {
    fontFamily: "orbit-icons",
    includeFontPadding: false,
    textAlignVertical: "center",
    color: theme.orbit.colorIconPrimary,
    fontSize: 20,
  };
});

StyledText.defaultProps = {
  theme: defaultTokens,
};

const getIconCharacter = name => {
  if (/^E(.{3})$/.test(iconsMap[name].character)) {
    return String.fromCharCode(parseInt(iconsMap[name].character, 16));
  }
  return iconsMap[name].character;
};

const Icon = ({ name, style }: Props) => (
  <StyledText style={style}>{getIconCharacter(name)}</StyledText>
);

export default Icon;
