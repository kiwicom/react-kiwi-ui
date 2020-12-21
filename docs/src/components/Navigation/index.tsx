import React from "react";
import styled from "styled-components";
import useCollections from "../../hooks/useCollections";
import { Link as GatsbyLink } from "gatsby";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";
import MobileNavigation from "./Mobile";
import { capitalize } from "./helpers";

const StyledLink = styled(GatsbyLink)`
  font-size: 1em;
  line-height: 22px;
  color: ${({ theme }) => theme.orbit.colorTextLinkSecondary};
  transition: all ${({ theme }) => theme.orbit.durationFast} ease-in;
  &:hover {
    color: ${({ theme }) => theme.orbit.colorTextLinkSecondaryHover};
  }
`;

const NavigationLinks = () => {
  const collections = useCollections([
    "guides",
    "accessibility",
    "components",
    "design-tokens",
    "foundation",
  ]);

  const { isDesktop } = useMediaQuery();

  return isDesktop ? (
    collections.map(({ name, id }, i) => (
      <React.Fragment key={id}>
        <StyledLink to={`/${name}/`}>{capitalize(name.split("-").join(" "))}</StyledLink>
        {i + 1 !== collections.length ? <span>&#xb7;</span> : null}
      </React.Fragment>
    ))
  ) : (
    <ul role="menu">
      {collections.map(({ id, name }) => (
        <MobileNavigation key={id} name={name} />
      ))}
    </ul>
  );
};

export default NavigationLinks;
