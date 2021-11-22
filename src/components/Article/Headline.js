import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Headline = props => {
  const { title, children, theme } = props;

  const Styles = styled.span`
    h1 {
    font-size: ${theme.font.size.xxl};
    margin: ${theme.space.stack.l};
    animation-name: headlineEntry;
    animation-duration: ${theme.time.duration.long};

    :global(span) {
      font-weight: ${theme.font.weight.standard};
      display: block;
      font-size: 0.5em;
      letter-spacing: 0;
      margin: ${theme.space.stack.xs};
    }

    :global(svg) {
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

  @media (min-width: 600) {
    h1 {
      font-size: ${`calc(${theme.font.size.xl} * 1.2)`};
    }
  }

  @media (min-width: 1024) {
    h1 {
      font-size: ${`calc(${theme.font.size.xl} * 1.4)`};
    }
  }
  `

  return (
    <Styles>
      {title ? <h1>{title}</h1> : <h1>{children}</h1>}

      {/* --- STYLES --- */}
      {/* <style jsx>{`
        h1 {
          font-size: ${theme.font.size.xxl};
          margin: ${theme.space.stack.l};
          animation-name: headlineEntry;
          animation-duration: ${theme.time.duration.long};

          :global(span) {
            font-weight: ${theme.font.weight.standard};
            display: block;
            font-size: 0.5em;
            letter-spacing: 0;
            margin: ${theme.space.stack.xs};
          }

          :global(svg) {
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

        @from-width tablet {
          h1 {
            font-size: ${`calc(${theme.font.size.xl} * 1.2)`};
          }
        }

        @from-width desktop {
          h1 {
            font-size: ${`calc(${theme.font.size.xl} * 1.4)`};
          }
        }
      `}</style> */}
    </Styles>
  );
};

Headline.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.object.isRequired
};

export default Headline;
