// @flow
import * as React from "react";
import styled from "styled-components";

import type { Props } from ".";

export const StyledTableRow: any = styled(({ children, className, dataTest }) => (
  <tr className={className} data-test={dataTest}>
    {children}
  </tr>
))`
  box-sizing: border-box;
  width: 100%;
  white-space: nowrap;
`;

const TableRow = ({ dataTest, children }: Props): React.Node => (
  <StyledTableRow dataTest={dataTest}>{children}</StyledTableRow>
);

export default TableRow;
