import React, { Component } from 'react';
import list from "../static/experienceList.js";
import ContentList from "./contentList.js";


class Experience extends Component {
  render() {
    const { scrollRef } = this.props;

    return <ContentList heading="Experience" scrollRef={scrollRef} list={list} />
  }
}

export default Experience;