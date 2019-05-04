import React, { Component } from 'react';
import styled from "styled-components";
import photo from "../static/profilePhoto.jpg"
import { colors } from '../style/theme.js'; 
import { media } from "../style/media.js";
import aboutMe from "../static/aboutMe.js";

const StyledHeading = styled.h1`
  font-family: 'Sofia', cursive;
  font-size: 4em; 
  color: ${colors.white};
  ${
    media.mobile`
      text-align:center;
    `
  };
`;

const RefContainer = styled.div`
  width: 80%;
  margin-bottom: 30px;
  ${
    media.mobile`
    width: 100%;
      // margin-bottom: 30vh;
    `
  }
`;

const StyledProfile = styled.img`
  width: 200px;
  display: block;
  border-radius: 50%;
  margin-top: 100px;
  border-color: ${colors.white};
  border-width: 3px;
  border-style: solid;
  ${
    media.mobile`
    margin-left: auto;
    margin-right: auto;
    `
  };
`;


const ContentP = styled.p`
  color: ${colors.white}
  font-size: 1.5em;
  ${
    media.mobile`
      text-align:center;
      color: ${colors.primary}
    `
  };
`;

class ProfileImage extends Component {
  render() { 
    const { scrollRef } = this.props;

    return (
      <React.Fragment>
        <StyledProfile src={photo} />
        <RefContainer ref={scrollRef}>
          <StyledHeading>Chris Jeong</StyledHeading>
          <ContentP>{aboutMe}</ContentP>
        </RefContainer>

      </React.Fragment>
    )
  }
}
 
export default ProfileImage;