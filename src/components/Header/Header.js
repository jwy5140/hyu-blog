import { Link } from "gatsby";
import React, {useState} from "react";
// import VisibilitySensor from "react-visibility-sensor";
import RVS from 'react-visibility-sensor'
import styled from "styled-components";

import { ScreenWidthContext, FontLoadedContext } from "../../layouts";
import config from "../../../content/meta/config";
import Menu from "../Menu";

import avatar from "../../images/jpg/avatar.jpg";

const Header = ({pages, path, theme}) => {

  const [fixed, setFixed] = useState(false)
  // const { pages, path, theme } = props;

  // const visibilitySensorChange = val => {
    // if (val) {
      // setFixed(false)
    // } else {
      // setFixed(true)
    // }
  // };

  const getHeaderSize = () => {
    const fixed = fixed ? "fixed" : "";
    const homepage = path === "/" ? "homepage" : "";

    return `${fixed} ${homepage}`;
  };

  //styles

  const Styles = styled.span`
    .header {
      align-items: center;
      justify-content: center;
      background-color: ${theme.color.neutral.white};
      display: flex;
      height: ${theme.header.height.default};
      position: relative;
      top: 0;
      width: 100%;
      align-items: center;

      a.logoType {
        align-items: center;
        display: flex;
        flex-direction: "column";
        color: ${theme.text.color.primary};

        .logo {
          flex-shrink: 0;
        }
      }

      &.homepage {
        position: absolute;
        background-color: transparent;
        height: ${theme.header.height.homepage};
      }
    }

    h1 {
      font-size: ${theme.font.size.m};
      font-weight: ${theme.font.weight.standard};
      margin: ${theme.space.stack.xs};
    }

    h2 {
      font-weight: ${theme.font.weight.standard};
      font-size: ${theme.font.size.xxs};
      letter-spacing: 0;
      margin: 0;
    }

    .brightness {
      display: block;
      margin: 0 auto 0 1.5vw;;
    }

    .anticon:hover {
      cursor: pointer;
    }

    .logo {
      display: none;

      .homepage & {
        height: 60px;
        width: 60px;
        border-radius: 65% 75%;
        border: 1px solid #eee;
        display: inline-block;
        margin: ${theme.space.inline.default};
        overflow: hidden;
        transition: all 0.5s;
      }

      img {
        width: 100%;
      }
    }

    .sensor {
      display: block;
      position: absolute;
      bottom: 0;
      z-index: 1;
      left: 0;
      right: 0;
      height: 1px;
      top: ${path === "/" ? theme.header.height.homepage : theme.header.height.default};
    }

    @media (min-width: 800px) {
      .header {
        padding: ${theme.space.inset.l};

        &.homepage {
          height: ${theme.header.height.homepage};
        }
      }
    }

    @media (max-width: 1024px) {
      .header.homepage {
        .logo {
          border: none;
        }

        a.logoType,
        h1 {
          color: ${theme.color.neutral.white};
        }
        h2 {
          color: ${theme.color.neutral.gray.d};
        }
      }
    }

    @media (min-width: 1024px) {
      .header {
        align-items: center;
        background-color: ${theme.color.neutral.white};
        display: flex;
        position: absolute;
        top: 0;
        width: 100%;
        justify-content: space-between;
        transition: padding 0.5s;

        &.fixed {
          height: ${theme.header.height.fixed};
          background-color: ${theme.color.neutral.white};
          left: 0;
          padding: 0 ${theme.space.m};
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1;

          h1 {
            margin: ${theme.space.stack.xxs};
          }

          h2 {
            display: none;
          }
        }

        &.homepage:not(.fixed) {
          a.logoType,
          h1 {
            color: ${theme.color.neutral.white};
          }
          h2 {
            color: ${theme.color.neutral.gray.d};
          }
        }
      }

      .header a.logoType {
        text-align: left;
        flex-direction: row;
        flex-shrink: 0;
        width: auto;
      }

      .logo {
        margin: ${theme.space.inline.default};

        .fixed & {
          display: none;
        }

        .header.homepage:not(.fixed) & {
          border: none;
        }
      }

      h2 {
        animation-duration: ${theme.time.duration.default};
        animation-name: h2Entry;
      }

      @keyframes h2Entry {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }
  `

  // render() {
    // const { fixed } = this.state;

    return (
      <Styles>
        <header className={`header ${getHeaderSize()}`}>
          <Link to="/" className="logoType">
            {/* <div className="logo"> */}
              {/* <img src={config.gravatarImgMd5=="" ? avatar : config.gravatarImgMd5 } alt={config.siteTitle} /> */}
            {/* </div> */}
            <div className="type">
              <h1>{config.headerTitle}</h1>
              {/* <h2>{config.headerSubTitle}</h2> */}
            </div>
          </Link>
          <FontLoadedContext.Consumer>
            {loaded => (
              <ScreenWidthContext.Consumer>
                {width => (
                  <Menu
                    path={path}
                    fixed={fixed}
                    screenWidth={width}
                    fontLoaded={loaded}
                    pages={pages}
                    theme={theme}
                  />
                )}
              </ScreenWidthContext.Consumer>
            )}
          </FontLoadedContext.Consumer>
        </header>
        <RVS onChange={(v)=>{v ? setFixed(false) : setFixed(true)}}>
          <div className="sensor" />
        </RVS>
      </Styles>
    );
  // }
}

// Header.propTypes = {
//   pages: PropTypes.array.isRequired,
//   path: PropTypes.string.isRequired,
//   theme: PropTypes.object.isRequired
// };

export default Header;
