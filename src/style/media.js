import { css } from "styled-components";

export const sizes = {
  largeDesktop: 1920,
  desktop: 1280,
  tablet: 960,
  mobile: 600
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
