// @flow
import * as React from "react";

import Badge from "../index";
import Stack from "../../Stack";
import * as Icons from "../../icons";

export default {
  Example: () => (
    <Badge aria-label="4 passengers" icon={<Icons.Passengers />}>
      4
    </Badge>
  ),
  info: {
    title: "Badge accessibility",
    description:
      "To make sure their meaning is clear to everyone, badges can have an aria-label to help people who can't see their visual cues.",
  },
};
