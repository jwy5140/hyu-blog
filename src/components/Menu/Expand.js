import { FaAngleDown } from "react-icons/fa/";
import React from "react";
import styled from "styled-components";

const Expand = props => {
  const { onClick, theme } = props;

  const Styles = styled.span`
    .more {
      cursor: pointer;
    }

    @media (max-width: 1024px) {
      .more {
        background: ${theme.color.neutral.white};
        border: 1px solid ${theme.color.brand.primary};
        border-radius: ${theme.size.radius.small} ${theme.size.radius.small} 0 0;
        border-bottom: none;
        position: absolute;
        left: 50%;
        top: -35px;
        width: 60px;
        height: 36px;
        overflow: hidden;
        z-index: 1;
        transform: translateX(-50%);

        &:focus {
          outline: none;

          svg {
            fill: ${theme.color.brand.primary};
          }
        }

        svg {
          transition: all 0.5s;
          transform: rotateZ(180deg);
          fill: ${theme.color.special.attention};
        }

        .open & svg {
          transform: rotateZ(0deg);
        }
      }
    }

    @media (min-width: 1024px) {
      .more {
        flex-shrink: 0;
        flex-grow: 0;
        width: 44px;
        height: 38px;
        background: transparent;
        margin-left: 10px;
        border-radius: ${theme.size.radius.small};
        border: 1px solid ${theme.line.color};
        display: flex;
        transition: background-color ${theme.time.duration.default};
        justify-content: center;
        align-items: center;
        padding: 0;
        z-index: 1;

        &:focus,
        &:hover {
          outline: none;
        }

        svg {
          transition: all ${theme.time.duration.default};
        }

        .homepage & {
          border: 1px solid transparent;
          background-color: color(white alpha(-90%));

          &:hover {
            background-color: color(white alpha(-60%));
          }
        }

        .open & {
          background-color: color(white alpha(-10%));
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;

          &:hover {
            background-color: color(white alpha(-10%));
          }

          svg {
            transform: rotate(180deg);
          }
        }

        .fixed & {
          border: 1px solid ${theme.line.color};
          height: 30px;
        }
      }
    }
  `

  return (
    <Styles>
      <button className="more" to="#" onClick={onClick} aria-label="expand">
        <FaAngleDown size={30} />
      </button>
    </Styles>
  );
};

export default Expand;
