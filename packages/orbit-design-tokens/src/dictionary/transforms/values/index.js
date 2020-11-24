// @flow
const _ = require("lodash");

const { isSpacing, isColor } = require("../../utils/is");
const { throwErrorTransform } = require("../../utils/throwError");

/*
  Transforms spacing to pixel value.
 */
const spacingJavascript = {
  name: "value/spacing/javascript",
  type: "value",
  matcher: isSpacing,
  transformer: ({ value }) => {
    return `${value}px`;
  },
};

/*
  Transforms value to Javascript compatible format with double quotes.
 */
const stringJavascript = {
  name: "value/string/javascript",
  type: "value",
  transformer: ({ value }) => {
    return `"${value}"`;
  },
};

/*
  Transforms attributes from attribute/foundation to interlaced identifiers.
  e.g. foundation.base.space.value
  TODO in future:
  - other types has leading dot at the end (only palette is being exposed via global tokens for now)
 */
const foundationAlias = {
  name: "value/foundation/alias",
  type: "value",
  transformer: prop => {
    const { attributes } = prop;
    const { category, name, type, state } = attributes;
    if ([category, name, type, state].every(value => value == null)) {
      throwErrorTransform("value/foundation/alias", "attribute/foundation");
    }
    const lastIdentifier = isColor(prop) ? [_.camelCase([type, state].join(" "))] : [type, state];
    return ["foundation", category, name, ...lastIdentifier].join(".");
  },
};

module.exports = { spacingJavascript, stringJavascript, foundationAlias };
