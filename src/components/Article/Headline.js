import React from "react";
import styled from "styled-components";

const Headline = props => {
  const { title, children, theme } = props;

  const Styles = styled.span`
    h1 {
    font-size: ${theme.font.size.xxl};
    margin: ${theme.space.stack.l};
    animation-name: headlineEntry;
    animation-duration: ${theme.time.duration.long};

    span {
      font-weight: ${theme.font.weight.standard};
      display: block;
      font-size: 0.5em;
      letter-spacing: 0;
      margin: ${theme.space.stack.xs};
    }

    svg {
      height: 0.75em;
      fill: ${theme.color.brand.primary};
    }
  }

  @keyframes headlineEntry {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }

  @media (min-width: 600px) {
    h1 {
      font-size: ${`calc(${theme.font.size.xl} * 1.2)`};
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: ${`calc(${theme.font.size.xl} * 1.4)`};
    }
  }
  `

  return (
    <Styles>
      {title ? <h1>{title}</h1> : <h1>{children}</h1>}
    </Styles>
  );
};

export default Headline;
