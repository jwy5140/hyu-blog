import React from "react";
import styled from "styled-components";

const Bodytext = props => {
  const { html, theme } = props;

  const Styles = styled.span`
    .bodytext {
      animation-name: bodytextEntry;
      animation-duration: ${theme.time.duration.long};

      h2,
      h3 {
        margin: 1.5em 0 1em;
      }

      h2 {
        line-height: ${theme.font.lineHeight.s};
        font-size: ${theme.font.size.l};
      }

      h3 {
        font-size: ${theme.font.size.m};
        line-height: ${theme.font.lineHeight.m};
      }

      p {
        font-size: ${theme.font.size.s};
        line-height: ${theme.font.lineHeight.xxl};
        margin: 0 0 1.5em;
      }
      ul {
        list-style: circle;
        margin: 0 0 1.5em;
        padding: 0 0 0 1.5em;
      }
      li {
        margin: 0.7em 0;
        line-height: 1.5;
      }
      a {
        font-weight: ${theme.font.weight.bold};
        color: ${theme.color.brand.primary};
        text-decoration: underline;
      }
      a.gatsby-resp-image-link {
        display: block;
        margin: 2.5em 0;
        border-radius: ${theme.size.radius.default};
        overflow: hidden;
        border: 1px solid ${theme.line.color};
        perspective: 1px;
      }
      code.language-text {
        background: ${theme.color.neutral.gray.c};
        text-shadow: none;
        color: inherit;
        padding: 0.1em 0.3em 0.2em;
        border-radius: 0.1em;
      }
    }

    @keyframes bodytextEntry {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `

  return (
    <Styles>
      <div className="bodytext" dangerouslySetInnerHTML={{ __html: html }} />
    </Styles>
  );
};

export default Bodytext;
