// @flow

import * as React from "react";
/* eslint-disable import/no-extraneous-dependencies */
import { withKnobs } from "@storybook/addon-knobs";

import { storiesOf } from "../../helpers/storiesOf";
import CenterView from "../CenterView";
import IconsList from "./IconsList";

import Icon from "./index";

storiesOf("Icon", module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Regular Icon", () => (
    <React.Fragment>
      <Icon name="check" />
    </React.Fragment>
  ))
  .add("Custom Icon", () => (
    <React.Fragment>
      <Icon name="check" color="#46B655" size={80} />
    </React.Fragment>
  ))
  .add("All Icons list", () => (
    <React.Fragment>
      <IconsList />
    </React.Fragment>
  ));
