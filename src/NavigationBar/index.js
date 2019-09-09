// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import MenuHamburger from "../icons/MenuHamburger";
import Stack from "../Stack";
import NavigationLink from "../NavigationLink";

import type { Props } from ".";

const StyledNavigationBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px; // TODO: create token
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.orbit.paletteWhite};
  box-shadow: 0 0 2px 0 rgba(37, 42, 49, 0.16), 0 2px 4px 0 rgba(37, 42, 49, 0.12); // TODO: use elevation levels
  padding: ${({ theme }) => theme.orbit.spaceSmall};
  box-sizing: border-box;
  z-index: 700;
`;

StyledNavigationBar.defaultProps = {
  theme: defaultTheme,
};

const NavigationBar = ({ onOpen, children, dataTest }: Props) => (
  <StyledNavigationBar data-test={dataTest}>
    {children}
    {onOpen && (
      <Stack grow={false} align="center" justify="end" shrink basis="0%">
        <NavigationLink type="horizontal" onClick={onOpen} icon={<MenuHamburger />} />
      </Stack>
    )}
  </StyledNavigationBar>
);

export default NavigationBar;
