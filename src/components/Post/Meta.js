import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';

import { FaCalendar } from "react-icons/fa/";
import { FaUser } from "react-icons/fa/";
import { FaTag } from "react-icons/fa/";

const Meta = props => {
  const { prefix, author: authorName, category, theme } = props;

  const Styles = styled.span`
    .meta {
      display: flex;
      flex-flow: row wrap;
      font-size: 0.8em;
      margin: ${theme.space.m} 0;
      background: transparent;

      svg {
        fill: ${theme.icon.color};
        margin: ${theme.space.inline.xs};
      }
      span {
        align-items: center;
        display: flex;
        text-transform: uppercase;
        margin: ${theme.space.xs} ${theme.space.s} ${theme.space.xs} 0;
      }
    }
    @media (min-width: 800px) {
      .meta {
        margin: ${`calc(${theme.space.m} * 1.5) 0 ${theme.space.m}`};
      }
    }
  `

  return (
    <Styles>
      <p className="meta">
        <span>
          <FaCalendar size={18} /> {prefix}
        </span>
        <span>
          <FaUser size={18} /> {authorName}
        </span>
        {category && (
          <span>
            <FaTag size={18} />
            <Link to={`/category/${category.split(" ").join("-")}`}>{category}</Link>
          </span>
        )}
      </p>
    </Styles>
  );
};

export default Meta;
