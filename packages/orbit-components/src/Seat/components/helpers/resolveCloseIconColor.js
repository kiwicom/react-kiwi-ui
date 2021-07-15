// @flow
import { TYPES } from "../../consts";

import type { Params } from "./index";

const resolveCloseIconColor = ({ type, theme, hover }: Params): string => {
  if (hover) {
    if (type === TYPES.UNAVAILABLE) return "";
    if (type === TYPES.LEGROOM) return theme.orbit.paletteBlueDarker;
    return theme.orbit.paletteProductDarker;
  }

  if (type === TYPES.LEGROOM) return theme.orbit.paletteBlueDarkSecondary;

  return theme.orbit.paletteProductDarkSecondary;
};

export default resolveCloseIconColor;
