import React, { Component } from 'react';
import styled from "styled-components";
import { colors } from '../style/theme.js';



const ContentWrapper = styled.div`
  background-color: ${colors.blackTransparent};
  padding: 2px 15px;
  box-shadow: 0px 5px 5px grey;
`;


const DateText = styled.span`
  float: right;
  color: ${colors.white}
  font-size: 1.3em;
`;

const ContentP = styled.p`
  color: ${colors.white}
  font-size: 1.3em;
`;

const Header = styled.h3`
  color: ${colors.white}
  font-size: 1.3em;
`;

const ProjectHeader = styled.h3`
  color: ${colors.white}
  font-size: 1.3em;
  margin-bottom: 0px;
  :hover {
    color: ${colors.secondary};
  }
`;

const Role = styled.span`
  color: ${colors.white}
  font-size: 1.3em;
`

const StyledA = styled.a`
  display: table-cell;
  text-decoration: none;
  :hover {
    cursor:pointer;
    color: black;
  }
`;

class DescriptionBox extends Component {
  state = {}
  render() {
    const { item } = this.props;
    return (
      <ContentWrapper>
        {
          item.bulletPoints &&
          <React.Fragment>
            <Header>{item.name}</Header>
            <Role>{item.role}</Role>
          </React.Fragment>
        }
        {
          item.description &&
          <StyledA href={item.url} target="_blank"> 
            <ProjectHeader>{item.name}  &lt;--Click</ProjectHeader>
          </StyledA>
        }

        {
          item.startDate &&
          <DateText>{item.startDate} - {item.endDate}</DateText>
        }
        {item.bulletPoints &&
          <ul style={{ clear: 'both' }}>
            {item.bulletPoints.map((point, _index) => {
              return (
                <li key={_index}>
                  <ContentP>
                    {point}
                  </ContentP>
                </li>
              );
            })}
          </ul>}
        {item.description &&
          <ContentP>{item.description}</ContentP>
        }
      </ContentWrapper>
    );
  }
}

export default DescriptionBox;