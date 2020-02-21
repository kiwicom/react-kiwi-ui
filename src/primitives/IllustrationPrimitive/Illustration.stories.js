// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs";

import { SIZE_OPTIONS } from "./consts";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";
import IllustrationList from "./IllustrationList";

import Illustration from "./index";

storiesOf("Illustration", module)
  .add(
    "Playground",
    () => {
      const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.MEDIUM);
      const name = "Accommodation";
      const dataTest = text("dataTest", "test");
      const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
      return <Illustration size={size} name={name} dataTest={dataTest} spaceAfter={spaceAfter} />;
    },
    {
      info: "Explore our new set of illustrations for Kiwi.com.",
    },
  )
  .add(
    "List of all Illustrations",
    () => {
      return <IllustrationList />;
    },
    {
      info: "Explore our new set of illustrations for Kiwi.com.",
    },
  );
