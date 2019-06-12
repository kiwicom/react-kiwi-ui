// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import Button from "../Button";
import ChevronLeft from "../icons/ChevronLeft";
import { DictionaryContext } from "../Dictionary";
import { pureTranslate } from "../Translate";

import type { Props } from "./index";

const StyledBreadcrumbs = styled.nav`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextSmall};
`;

StyledBreadcrumbs.defaultProps = {
  theme: defaultTheme,
};

const StyledBreadcrumbsList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledBackButtonWrapper = styled.span`
  margin-right: ${({ theme }) => theme.orbit.spaceSmall};
`;

StyledBackButtonWrapper.defaultProps = {
  theme: defaultTheme,
};

const OnGoBack = ({ onGoBack }) => {
  const dictionary = React.useContext(DictionaryContext);

  return (
    <StyledBackButtonWrapper>
      <Button
        iconLeft={<ChevronLeft />}
        circled
        type="secondary"
        size="small"
        onClick={onGoBack}
        title={pureTranslate(dictionary, "breadcrumbs_back")}
      />
    </StyledBackButtonWrapper>
  );
};

const Breadcrumbs = ({ children, dataTest, onGoBack }: Props) => (
  <StyledBreadcrumbs aria-label="Breadcrumb" role="navigation" data-test={dataTest}>
    <StyledBreadcrumbsList vocab="http://schema.org/" typeof="BreadcrumbList">
      {onGoBack && <OnGoBack onGoBack={onGoBack} />}
      {React.Children.map(children, (item, key) => {
        return React.cloneElement(item, {
          active: key === React.Children.count(children) - 1,
          contentKey: key + 1,
        });
      })}
    </StyledBreadcrumbsList>
  </StyledBreadcrumbs>
);

export default Breadcrumbs;

export { default as BreadcrumbsItem } from "./BreadcrumbsItem";
