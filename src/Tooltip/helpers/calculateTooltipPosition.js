// @flow
import { isPositionBottom, isPositionLeft, isPositionRight, isPositionTop } from "./isPosition";
import { POSITIONS, TOOLTIP_ARROW_SIZE } from "../consts";

const isInside = (p, canBe) => {
  if (isPositionTop(p) && canBe[p]) {
    return POSITIONS.TOP;
  }
  if (isPositionRight(p) && canBe[p]) {
    return POSITIONS.RIGHT;
  }
  if (isPositionBottom(p) && canBe[p]) {
    return POSITIONS.BOTTOM;
  }
  if (isPositionLeft(p) && canBe[p]) {
    return POSITIONS.LEFT;
  }
  return false;
};

const calculateTooltipPosition = (positions, dimensions) => {
  const {
    containerTop,
    containerLeft,
    containerHeight,
    containerWidth,
    tooltipWidth,
    tooltipHeight,
    windowWidth,
    windowHeight,
  } = dimensions;

  const canBe = {
    [POSITIONS.LEFT]: containerLeft - tooltipWidth - TOOLTIP_ARROW_SIZE > 0,
    [POSITIONS.RIGHT]:
      containerLeft + containerWidth + tooltipWidth + TOOLTIP_ARROW_SIZE < windowWidth,
    [POSITIONS.TOP]: containerTop - tooltipHeight > 0,
    [POSITIONS.BOTTOM]: containerTop + containerHeight + tooltipHeight < windowHeight,
  };

  const possiblePositions = positions
    .map(p => isInside(p, canBe))
    .filter(p => typeof p === "string");

  const position = possiblePositions[0];
  if (typeof position === "string") {
    return position;
  }
  return null;
};

export default calculateTooltipPosition;
