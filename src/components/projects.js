import React, { Component } from 'react';
import ContentList from "./contentList.js";
import list from "../static/projectList.js";

class Projects extends Component {
  render() { 
    const { scrollRef } = this.props;

    return ( <ContentList list={list} heading="Projects" scrollRef={scrollRef} />);
  }
}
 
export default Projects;