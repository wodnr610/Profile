import React, { Component } from 'react';
import styled from "styled-components";
import {media} from "../style/media.js";
import { colors } from "../style/theme.js";
import Grid from '@material-ui/core/Grid';

const LogoWrapper = styled.div`
  width: 170px;
  height: 170px;
  border: solid 2px #8ac0d2;
  border-radius: 50%;
  padding: 10px;
  background-color: ${colors.whiteTransparent};
  display: flex;
  align-items: center; /* horizontal */
  justify-content: center; /* vertical */
  :hover{
    cursor: pointer;
    background-color: ${colors.blackTransparent};
  }
  float: ${props => props.index % 2 === 0 ? 'left' : 'right'};
  ${
    props => props.index % 2 === 0 &&
    'margin-left: 150px'
  };
  ${
    props => props.index % 2 !== 0 &&
    'margin-right: 200px'
  };
  ${media.mobile`
    margin-right: auto;
    margin-left: auto;
    float: none;
  `};
`;

const StyledImg = styled.img`
  width: 170px;
  max-width: 170px;
`;

const ProjectImageContainer = styled.div`
  float: ${props => props.index % 2 === 0 ? 'left' : 'right'};
  display: flex;
  align-items: center; /* horizontal */
  justify-content: center; /* vertical */
  ${
    props => props.index % 2 === 0 &&
    'margin-left: 100px'
  };
  ${
    props => props.index % 2 !== 0 &&
    'margin-right: 100px'
  };
  ${media.mobile`
    margin-right: auto;
    margin-left: auto;
    float: none;
  `};
  :hover {
    cursor:pointer;
  }
`;

const ProjectImage = styled.img`
  width: 300px;
  max-width: 300px;
`;

class Logo extends Component {
  render() { 
    const { item, index } = this.props;
    if (item.description) {
      return (
        <ProjectImageContainer data-name={item.name} index={index}>
          <ProjectImage src={item.logo} data-name={item.name}/>
        </ProjectImageContainer>
      );
    }
    return ( 
    <LogoWrapper data-name={item.name} index={index}>
      <StyledImg src={item.logo} data-name={item.name}/>
    </LogoWrapper> 
    );
  }
}
 
export default Logo;
