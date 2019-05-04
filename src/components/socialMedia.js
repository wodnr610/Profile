import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";
import { colors } from "../style/theme.js";
import { Hidden } from '@material-ui/core';


const list =[
  {
    icon: "fab fa-linkedin fa-5x",
    href: "https://www.linkedin.com/in/chrisjeong610/"
  },
  {
    icon: "far fa-envelope fa-5x",
    href: "mailto:chris.jeong610@gmail.com"
  },
  {
    icon: "fab fa-github-square fa-5x",
    href: "https://github.com/wodnr610"
  },
]

const StyledContainer = styled.div`
  margin: 0px auto 50vh;

`;

const StyledIcons = styled.i`
  color: ${colors.white};
  margin-right: 20px;
  :hover {
    color: ${colors.mint};
    cursor: pointer;
  }
`;

const StyledA = styled.a`
  display: table-cell;
`;

class SocialMedia extends Component {
  render() { 
    return ( 
      <React.Fragment>
      <Hidden xsDown>
        <StyledContainer>
          <Grid container={true}>
            {list.map((elem, index) => {
              if (index === 1) {
                return (
                <Grid item key={index}>
                  <StyledA href={elem.href}>
                    <StyledIcons className={elem.icon}/>
                  </StyledA>
                </Grid>
                )
              }
              return (
                <Grid item key={index}>
                  <StyledA href={elem.href} target="_blank">
                    <StyledIcons className={elem.icon}/>
                  </StyledA>
                </Grid>
            )})}
            </Grid>
        </StyledContainer>
      </Hidden>
        <Hidden smUp>
          <StyledContainer>
            <Grid container={true} justify="center">
              {list.map((elem, index) => {
                if (index === 1) {
                  return (
                  <Grid item key={index}>
                    <StyledA href={elem.href}>
                      <StyledIcons className={elem.icon}/>
                    </StyledA>
                  </Grid>
                  )
                }
                return (
                  <Grid item key={index}>
                    <StyledA href={elem.href} target="_blank">
                      <StyledIcons className={elem.icon}/>
                    </StyledA>
                  </Grid>
              )})}
              </Grid>
          </StyledContainer>
        </Hidden>
      </React.Fragment>
      

     );
  }
}
 
export default SocialMedia;