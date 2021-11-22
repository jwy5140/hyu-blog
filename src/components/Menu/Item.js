import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

const Item = ({theme, item, icon, hidden, onClick}) => {
  // const { theme, item: { label, to, icon: Icon } = {}, onClick } = props;
  const check = {theme, item, icon, hidden, onClick}

  const Styles = styled.span`
    .item,
    .showItem {
      background: transparent;
      transition: all ${theme.time.duration.default};
      display: flex;
      align-items: center;

      :global(a) {
        padding: ${theme.space.inset.s};
        display: flex;
        align-items: center;
      }

      :global(svg) {
        margin: 0 ${theme.space.inset.xs} 0 0;
        opacity: 0.3;
      }
    }

    :global(.itemList .hideItem) {
      display: none;
    }

    @media (min-width: 1024) {
      .item {
        :global(a) {
          color: ${theme.text.color.primary};
          padding: ${theme.space.inset.s};
          transition: all ${theme.time.duration.default};
          border-radius: ${theme.size.radius.small};
        }

        :global(.homepage):not(.fixed) & :global(a) {
          color: ${theme.color.neutral.white};
        }

        :global(a:hover) {
          color: ${theme.color.brand.primary};
          background: color(white alpha(-60%));
        }

        :global(svg) {
          transition: all ${theme.time.duration.default};
        }

        &:hover :global(svg) {
          fill: ${theme.color.brand.primary};
          opacity: 1;

          :global(.hero) & :global(svg) {
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

        & :global(a.inHiddenItem) {
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
      <li className={"hiddenItem" in check ? "hiddenItem" : "item"} key={item.label}>
        <Link
          to={item.to}
          className={"hiddenItem" in check ? "inHiddenItem" : ""}
          onClick={onClick}
          data-slug={item.to}
        >
          {icon.Icon} {item.label}
        </Link>
      </li>
    </Styles>
  );
};

// Item.propTypes = {
//   item: PropTypes.object,
//   hidden: PropTypes.bool,
//   onClick: PropTypes.func,
//   icon: PropTypes.func,
//   theme: PropTypes.object.isRequired
// };

export default Item;
