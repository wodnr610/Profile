import React, { Component } from 'react';
import list from "../static/experienceList.js";
import styled from "styled-components";
import Collapse from "@material-ui/core/Collapse";
import Logo from "./logo.js";
import DescriptionBox from "./DecriptionBox.js";
import { WrapperDiv } from "../WrapperDiv.js";
import HeaderBanner from "./headerBanner.js";

const LiWrapper = styled.div`
  margin-top: 20px;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  overflow:hidden;
  padding-left: 0px;
`;

const StyledLi = styled.li`
  margin-top: 10px;
  padding: 10px;
  clear: both;
`;

class ContentList extends Component {
  constructor(props) {
    super(props);
    this.handleClickImg = this.handleClickImg.bind(this);
    this.experienceRef = React.createRef();
    this.state = {
      opened: {}
    };
  }

  handleClickImg(e) {
    let { opened } = this.state;
    const name = e.target.getAttribute('data-name');
    opened[name] = opened[name] === null ? true : !opened[name];
    this.setState({ opened });

  }

  render() {
    const { scrollRef, list, heading } = this.props;
    const { opened } = this.state;
    return (
      <React.Fragment>
        <div ref={scrollRef}>
          <HeaderBanner  heading={heading} />
        </div>
        <WrapperDiv>
          <StyledUl onClick={this.handleClick} >
            {
              list.map((elem, index) => {
                return (
                  <LiWrapper key={index} index={index} onClick={this.handleClickImg}>
                    <Logo item={elem} index={index} />
                    <StyledLi>
                      <Collapse in={opened[elem.name]}>
                        <DescriptionBox item={elem} />
                      </Collapse>
                    </StyledLi>
                  </LiWrapper>
                )
              })
            }
          </StyledUl>
        </WrapperDiv>
      </React.Fragment>
    )
  }
}

export default ContentList;