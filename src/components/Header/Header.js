import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import styled from "styled-components";

import { ScreenWidthContext, FontLoadedContext } from "../../layouts";
import config from "../../../content/meta/config";
import Menu from "../Menu";

import avatar from "../../images/jpg/avatar.jpg";

const Header = () => {
  state = {
    fixed: false,
  };

  visibilitySensorChange = val => {
    if (val) {
      this.setState({ fixed: false });
    } else {
      this.setState({ fixed: true });
    }
  };

  getHeaderSize = () => {
    const fixed = this.state.fixed ? "fixed" : "";
    const homepage = this.props.path === "/" ? "homepage" : "";

    return `${fixed} ${homepage}`;
  };

  //styles

  const Sheader = styled.header`
    align-items: center;
    justify-content: center;
    background-color: ${theme.color.neutral.white};
    display: flex;
    height: ${theme.header.height.default};
    position: relative;
    top: 0;
    width: 100%;
    align-items: center;

    @media (min-width: 600){
      padding: ${theme.space.inset.l};
    }

    @media (min-width: 1024){
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
        :global(a.logoType),
        h1 {
          color: ${theme.color.neutral.white};
        }
        h2 {
          color: ${theme.color.neutral.gray.d};
        }
      }

      :global(a.logoType) {
        text-align: left;
        flex-direction: row;
        flex-shrink: 0;
        width: auto;
      }
    }

    :global(a.logoType) {
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

      @media (min-width: 600){
        height: ${theme.header.height.homepage};
      }

      @media (max-width: 1024){
        .logo{
          border: none;
        }
      }
    }
  `

  const H1 = styled.h1`
    font-size: ${theme.font.size.m};
    font-weight: ${theme.font.weight.standard};
    margin: ${theme.space.stack.xs};
  `

  const Sensor = styled.div`
    display: block;
    position: absolute;
    bottom: 0;
    z-index: 1;
    left: 0;
    right: 0;
    height: 1px;
    top: ${path === "/" ? theme.header.height.homepage : theme.header.height.default};
  `

  // render() {
    const { pages, path, theme } = this.props;
    const { fixed } = this.state;

    return (
      <React.Fragment>
        <Sheader className={`header ${this.getHeaderSize()}`}>
          <Link to="/" className="logoType">
            {/* <div className="logo"> */}
              {/* <img src={config.gravatarImgMd5=="" ? avatar : config.gravatarImgMd5 } alt={config.siteTitle} /> */}
            {/* </div> */}
            <div className="type">
              <H1>{config.headerTitle}</H1>
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
        </Sheader>
        <VisibilitySensor onChange={this.visibilitySensorChange}>
          <Sensor className="sensor" />
        </VisibilitySensor>

        {/* --- STYLES --- */}
        {/* <style jsx>{`
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

            :global(a.logoType) {
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

          @from-width tablet {
            .header {
              padding: ${theme.space.inset.l};

              &.homepage {
                height: ${theme.header.height.homepage};
              }
            }
          }

          @below desktop {
            .header.homepage {
              .logo {
                border: none;
              }

              :global(a.logoType),
              h1 {
                color: ${theme.color.neutral.white};
              }
              h2 {
                color: ${theme.color.neutral.gray.d};
              }
            }
          }

          @from-width desktop {
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
                :global(a.logoType),
                h1 {
                  color: ${theme.color.neutral.white};
                }
                h2 {
                  color: ${theme.color.neutral.gray.d};
                }
              }
            }

            .header :global(a.logoType) {
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
        `}</style> */}
      </React.Fragment>
    );
  // }
}

Header.propTypes = {
  pages: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default Header;
