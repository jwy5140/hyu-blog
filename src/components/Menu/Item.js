import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Item = props => {
  const {theme, item: { label, to, icon: Icon } = {}, onClick} = props

  const Styles = styled.span`
    .item,
    .showItem {
      background: transparent;
      transition: all ${theme.time.duration.default};
      display: flex;
      align-items: center;

      a {
        padding: ${theme.space.inset.s};
        display: flex;
        align-items: center;
      }

      svg {
        margin: 0 ${theme.space.inset.xs} 0 0;
        opacity: 0.3;
      }
    }

    .itemList .hideItem {
      display: none;
    }

    @media (min-width: 1024px) {
      .item {
        a {
          color: ${theme.text.color.primary};
          padding: ${theme.space.inset.s};
          transition: all ${theme.time.duration.default};
          border-radius: ${theme.size.radius.small};
        }

        .homepage:not(.fixed) & a {
          color: ${theme.color.neutral.white};
        }

        a:hover {
          color: ${theme.color.brand.primary};
          background: rgba(255,255,255,.6);
        }

        svg {
          transition: all ${theme.time.duration.default};
        }

        &:hover svg {
          fill: ${theme.color.brand.primary};
          opacity: 1;

          .here & svg {
            fill: green;
          }
        }
      }

      .showItem {
        display: none;
      }

      .hiddenItem {
        text-align: left;
        padding: ${theme.space.xs};

        & a.inHiddenItem {
          color: ${theme.text.color.primary};
          &:hover {
            color: ${theme.color.brand.primary};
          }
        }
      }
    }
  `

  return (
    <Styles>
      <li className={"hiddenItem" in props ? "hiddenItem" : "item"} key={label}>
        <Link
          to={to}
          className={"hiddenItem" in props ? "inHiddenItem" : ""}
          onClick={onClick}
          data-slug={to}
        >
          {Icon && <Icon />} {label}
        </Link>
      </li>
    </Styles>
  );
};

export default Item;
