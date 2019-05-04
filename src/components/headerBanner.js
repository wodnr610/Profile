import React, { Component } from "react";
import styled from "styled-components";
import { colors } from '../style/theme.js'; 

const StyledBanner = styled.div`
  width: 100%;
`;

const StyledHeading = styled.h2 `
  font-family: 'Sofia', cursive;
  color: ${colors.white};
  font-size: 3em;
  text-align: center;
`

class HeaderBanner extends Component {
  render() { 
    const { heading } = this.props;

    return (
      <StyledBanner>
        <StyledHeading>{heading}</StyledHeading>
      </StyledBanner>
      );
  }
}
 
export default HeaderBanner;