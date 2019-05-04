import React, { Component } from 'react';
import styled from "styled-components";
import { colors } from '../style/theme.js'; 
import { media } from "../style/media.js";

const Container = styled.div`
  z-index: 100;
  top: 0;
  width: 100vw;
  overflow: visible;
  background-color: white;
  position: fixed;
  height: 65px;
  background-color: ${colors.whiteTransparent};
  padding: 10px 200px;
  box-shadow: 0px 5px 5px gray;
  :hover {
    cursor: pointer;
  }
  ${
    media.mobile`
    padding-left: 0px;
    padding-right: 0px;
    text-align: center
    `
  };
`;

const StyledOption = styled.span`
  color: ${colors.black};
  margin-left: 60px;
  line-height: 65px;
  font-size: 1.3em;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  ${
    media.mobile`
    margin-left: 20px;
    font-size: 1.1em;
    `
  };
`;

const NavList = [
  {
    key: "aboutMe",
    label: "About Me"
  },
  {
    key: "experience",
    label: "Experience"
  },
  {
    key: "projects",
    label: "Projects"
  },
]


class TopNav extends Component {
  scrollToRef(ref) {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }

  render() {
    const { scrollRefs } = this.props;
    return (
      <Container>
        {NavList.map((elem, index) => {
          return (
              <StyledOption key={index} onClick={() => this.scrollToRef(scrollRefs[elem.key])}>{elem.label}</StyledOption>
          );
        })
        }
      </Container>

    );
  }
}

export default TopNav;