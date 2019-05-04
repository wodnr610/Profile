import React, { Component } from 'react';
import styled from "styled-components";
import photo from "../static/profilePhoto.jpg"
import { colors } from '../style/theme.js'; 
import { media } from "../style/media.js";

const StyledHeading = styled.h1`
  font-family: 'Sofia', cursive;
  text-align:center;
  font-size: 4em; 
  color: ${colors.white};
  margin-bottom: 50vh;
  ${
    media.mobile`
      margin-bottom: 30vh;
    `
  }
`;

const StyledProfile = styled.img`
  width: 200px;
  display: block;
  border-radius: 50%;
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
  border-color: ${colors.primary};
  border-width: 3px;
  border-style: solid;
`;

class ProfileImage extends Component {
  render() { 
    const { scrollRef } = this.props;

    return (
      <React.Fragment>
        <StyledProfile src={photo} />
        <div ref={scrollRef}>
          <StyledHeading align='center'>Chris Jeong</StyledHeading>
        </div>
      </React.Fragment>
    )
  }
}
 
export default ProfileImage;