import React, { Component } from 'react';
import ProfileImage from './profileImage.js';
import Experience from "./experience.js";
import TopNav from "./topNav.js";
import styled from "styled-components";
import { media } from "../style/media.js";
import Projects from "./projects.js";
import SocialMedia from "./socialMedia.js";

const Container = styled.div`
  padding-top: 50px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 200px;
  ${
    media.mobile`
    width: 95%;
    `
  };
`;

class Layout extends Component {
  constructor(props) {
  super(props);
  const scrollRefs = {
    aboutMe: React.createRef(),
    experience: React.createRef(),
    projects: React.createRef(),
  }

  this.state = {
    scrollRefs
  }
}
  render() { 
    const { scrollRefs } = this.state;

    return (
      <React.Fragment>
        <TopNav scrollRefs={scrollRefs}/>
        <Container>
          <ProfileImage scrollRef={scrollRefs.aboutMe}/>
          <SocialMedia />
          <Experience scrollRef={scrollRefs.experience}/>
          <Projects scrollRef={scrollRefs.projects}/>
        </Container>
      </React.Fragment>
    );
  }
}
 
export default Layout;