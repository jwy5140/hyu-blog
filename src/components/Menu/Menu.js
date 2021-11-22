import React, {useState, useEffect, useRef} from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
// require("core-js/fn/array/from");

import { FaHome, FaSearch, FaEnvelope, FaListAlt, FaPortrait, FaCode, FaLaughBeam } from "react-icons/fa/";

import Item from "./Item";
import Expand from "./Expand";

const Menu = ({path, fixed, fontLoaded, pages, screenWidth, theme}) => {

  const [open, setOpen] = useState(false)
  const [hiddenItems, setHiddenItems] = useState([])

    const itemList = React.createRef();
    const prevPropsRef = useRef({path, fixed, fontLoaded, pages, screenWidth, theme})

    useEffect(()=>{
      prevPropsRef.current = {path, fixed, fontLoaded, pages, screenWidth, theme}
    })

    const prevProps = prevPropsRef.current

    pages = pages.map(page => ({
      to: page.node.fields.slug,
      label: page.node.frontmatter.menuTitle
        ? page.node.frontmatter.menuTitle
        : page.node.frontmatter.title
    }));

    const items = [
      { to: "/", label: "Home", icon: FaHome },
      { to: "/blogposts/", label: "Categories", icon: FaListAlt },
      { to: "/search/", label: "Search", icon: FaSearch },
      { to: "/about/", label: "About Me", icon: FaPortrait },
      { to: "/projects/", label: "Projects", icon: FaCode },
      { to: "/experiments/", label: "For Fun", icon: FaLaughBeam },
      { to: "/contact/", label: "Contact Me", icon: FaEnvelope }
    ];

    let renderedItems = []; // will contain references to rendered DOM elements of menu

    const Smenu = styled.nav`
      align-items: center;
      background: ${theme.color.neutral.white};
      bottom: 0;
      display: flex;
      flex-grow: 1;
      left: 0;
      max-height: ${open ? "1000px" : "50px"};
      padding: 0 ${theme.space.inset.s};
      position: fixed;
      width: 100%;
      z-index: 1;
      transition: all ${theme.time.duration.default};

      @media (max-width: 1024){
        &::after {
          position: absolute;
          content: "";
          left: ${theme.space.m};
          right: ${theme.space.m};
          top: 0;
          height: 1px;
          background: ${theme.color.brand.primary};
        }

        &.open {
          padding: ${theme.space.inset.m};
        }

        :global(.homepage):not(.fixed) & {
          bottom: -100px;
        }
      }

      @media (min-width: 1024){
        border-top: none;
        background: transparent;
        display: flex;
        position: relative;
        justify-content: flex-end;
        padding-left: 50px;
        transition: none;
      }
    `

    const Itemlist = styled.ul`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      list-style: none;
      margin: 0;
      padding: 0; 
      position: relative;
      width: 100%;

      @media (min-width: 1024){
        justify-content: flex-end;
        padding: 0;
      }
    `
    const Hiddenitemlist = styled.ul`
      @media (min-width: 1024){
        list-style: none;
        margin: 0;
        position: absolute;
        background: ${theme.background.color.primary};
        border: 1px solid ${theme.line.color};
        top: 48px;
        right: ${theme.space.s};
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: ${theme.space.m};
        border-radius: ${theme.size.radius.small};
        border-top-right-radius: 0;


        &:after {
          content: "";
          background: ${theme.background.color.primary};
          z-index: 10;
          top: -10px;
          right: -1px;
          width: 44px;
          height: 10px;
          position: absolute;
          border-left: 1px solid ${theme.line.color};
          border-right: 1px solid ${theme.line.color};
        }

        :global(.homepage):not(.fixed) & {
          border: 1px solid transparent;
          background: color(white alpha(-10%));
          top: 50px;

          &:after {
            top: -11px;
            border-left: 1px solid transparent;
            border-right: 1px solid transparent;
            background: color(white alpha(-10%));
          }
        }
      }
    `
  // }

  // state = {
  //   open: false,
  //   hiddenItems: []
  // };

  // static 
  // propTypes = {
  //   path: PropTypes.string.isRequired,
  //   fixed: PropTypes.bool.isRequired,
  //   screenWidth: PropTypes.number.isRequired,
  //   fontLoaded: PropTypes.bool.isRequired,
  //   pages: PropTypes.array.isRequired,
  //   theme: PropTypes.object.isRequired
  // };

  useEffect(()=>{
    renderedItems = getRenderedItems();
    if (
      path !== prevProps.path ||
      fixed !== prevProps.fixed ||
      screenWidth !== prevProps.screenWidth ||
      fontLoaded !== prevProps.fontLoaded
    ) {
      if (path !== prevProps.path) {
        closeMenu();
      }
      hideOverflowedMenuItems();
    }
  })

  // componentDidMount() {
  //   this.renderedItems = this.getRenderedItems();
  // }

  // componentDidUpdate(prevProps) {
  //   if (
  //     this.props.path !== prevProps.path ||
  //     this.props.fixed !== prevProps.fixed ||
  //     this.props.screenWidth !== prevProps.screenWidth ||
  //     this.props.fontLoaded !== prevProps.fontLoaded
  //   ) {
  //     if (this.props.path !== prevProps.path) {
  //       this.closeMenu();
  //     }
  //     this.hideOverflowedMenuItems();
  //   }
  // }

  const getRenderedItems = () => {
    const itemListEx = itemList.current;
    return Array.from(itemListEx.children);
  };

  const hideOverflowedMenuItems = () => {
    const PADDING_AND_SPACE_FOR_MORELINK = screenWidth >= 1024 ? 60 : 0;

    const itemsContainer = itemList.current;
    const maxWidth = itemsContainer.offsetWidth - PADDING_AND_SPACE_FOR_MORELINK;

    setHiddenItems([]); // clears previous state

    const menu = renderedItems.reduce(
      (result, item) => {
        item.classList.add("item");
        item.classList.remove("hideItem");

        const currentCumulativeWidth = result.cumulativeWidth + item.offsetWidth;
        result.cumulativeWidth = currentCumulativeWidth;

        if (!item.classList.contains("more") && currentCumulativeWidth > maxWidth) {
          const link = item.querySelector("a");

          item.classList.add("hideItem");
          item.classList.remove("item");
          result.hiddenItems.push({
            to: link.getAttribute("data-slug"),
            label: link.text
          });
        }
        return result;
      },
      { visibleItems: [], cumulativeWidth: 0, hiddenItems: [] }
    );

    setHiddenItems(menu.hiddenItems);
  };

  const toggleMenu = e => {
    e.preventDefault();

    if (screenWidth < 1024) {
      renderedItems = renderedItems.map(item => {
        const oldClass = this.state.open ? "showItem" : "hideItem";
        const newClass = this.state.open ? "hideItem" : "showItem";

        if (item.classList.contains(oldClass)) {
          item.classList.add(newClass);
          item.classList.remove(oldClass);
        }
      });
    }

    this.setState(prevState => ({ open: !prevState.open }));
  };

  const closeMenu = e => {
    // e.preventDefault();

    if (open) {
      setOpen(false);
      if (screenWidth < 1024) {
        renderedItems.map(item => {
          if (item.classList.contains("showItem")) {
            item.classList.add("hideItem");
            item.classList.remove("item");
          }
        });
      }
    }
  };

  // render() {
    // const { screenWidth, theme } = this.props;
    // const { open } = this.state;

    return (
      <React.Fragment>
        <Smenu className={`menu ${open ? "open" : ""}`} rel="js-menu">
          <Itemlist className="itemList" ref={itemList}>
            {items.map(item => (
              <Item item={item} key={item.label} icon={item.icon} theme={theme} />
            ))}
          </Itemlist>
          {hiddenItems.length > 0 && <Expand onClick={toggleMenu} theme={theme} />}
          {open &&
            screenWidth >= 1024 && (
              <Hiddenitemlist className="hiddenItemList">
                {hiddenItems.map(item => (
                  <Item item={item} key={item.label} hiddenItem theme={theme} />
                ))}
              </Hiddenitemlist>
            )}
        </Smenu>
      </React.Fragment>
    );
  // }
}

export default Menu;
