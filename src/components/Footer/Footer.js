import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Footer = ({html, theme}) => {
  // const { html, theme } = props;

  const Styles = styled.span`
    .footer {
      background: ${theme.color.neutral.white};
      padding: ${theme.space.inset.default};
      padding-top: 0;
      padding-bottom: 120px;

      ul {
        list-style: none;
        text-align: center;
        padding: 0;

        li {
          color: ${theme.color.neutral.gray.g};
          font-size: ${theme.font.size.xxs};
          padding: ${theme.space.xxs} ${theme.space.s};
          position: relative;
          display: inline-block;

          &::after {
            content: "•";
            position: absolute;
            right: ${`calc(${theme.space.xs} * -1)`};
          }

          &:last-child::after {
            content: "";
          }
        }
      }
    }

    @media (min-width: 1024) {
      .footer {
        padding: 0 1em 1.5em;
      }
    } 
  `

  return (
    <Styles>
      <footer className="footer" dangerouslySetInnerHTML={{ __html: html }} />

      {/* --- STYLES --- */}
    </Styles>
  );
};

Footer.propTypes = {
  html: PropTypes.string,
  theme: PropTypes.object.isRequired
};

export default Footer;
