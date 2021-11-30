import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from 'styled-components';

import { FaArrowRight } from "react-icons/fa/";
import { FaArrowLeft } from "react-icons/fa/";

const NextPrev = props => {
  const {
    theme,
    next: {
      fields: { prefix: nextPrefix, slug: nextSlug } = {},
      frontmatter: { title: nextTitle } = {}
    } = {},
    prev: {
      fields: { prefix: prevPrefix, slug: prevSlug } = {},
      frontmatter: { title: prevTitle } = {}
    } = {}
  } = props;

  const Styles = styled.span`
    .links {
      display: flex;
      flex-direction: column;
      padding: 0 ${theme.space.m} ${theme.space.l};
      border-bottom: 1px solid ${theme.line.color};
      margin: ${theme.space.stack.l};

      a {
        display: flex;
      }

      a:nth-child(2) {
        margin: ${theme.space.default} 0 0;
      }

      svg {
        fill: ${theme.color.special.attention};
        width: ${theme.space.m};
        height: ${theme.space.m};
        flex-shrink: 0;
        flex-grow: 0;
        margin: ${theme.space.inline.m};
      }
    }

    h4 {
      font-weight: 600;
      margin: 0;
      font-size: 1.1em;
    }
    time {
      color: ${theme.color.neutral.gray.g};
      display: block;
      font-weight: 400;
      font-size: 0.8em;
      margin-top: 0.5em;
    }

    @media (min-width: 1024px) {
      .links {
        flex-direction: row-reverse;
        justify-content: center;

        a {
          flex-basis: 50%;
        }

        a:nth-child(2) {
          margin: 0;
        }
        svg {
          transition: all 0.5s;
          margin: ${theme.space.inline.s};
        }
      }

      @media (hover: hover) {
        .links a:hover svg {
          transform: scale(1.5);
        }
      }
    }
  `

  return (
    <Styles>
      <div className="links">
        {nextSlug && (
          <Link to={nextSlug}>
            <FaArrowRight />
            <h4>
              {nextTitle} <time>{nextPrefix} </time>
            </h4>
          </Link>
        )}
        {prevSlug && (
          <Link to={prevSlug}>
            <FaArrowLeft />
            <h4>
              {prevTitle} <time>{prevPrefix}</time>
            </h4>
          </Link>
        )}
      </div>
    </Styles>
  );
};

NextPrev.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object,
  theme: PropTypes.object.isRequired
};

export default NextPrev;
