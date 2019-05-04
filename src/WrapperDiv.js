import styled from "styled-components";
import { media } from "./style/media.js";

const WrapperDiv = styled.div`
margin: 0px auto 0px;
height: 100%;
${media.mobile`
  width: 100%;
`};
background-color:transparent;
`;

export { WrapperDiv };