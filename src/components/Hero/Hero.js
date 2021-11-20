import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from 'styled-components';

import { FaChevronDown } from "react-icons/fa/";

const Hero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  const Shero = styled.section`
    align-items: center;
    background: ${theme.hero.background};
    background-image: url(${backgrounds.mobile});
    background-size: cover;
    color: ${theme.text.color.primary.inverse};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    min-height: 100vh;
    min-width: 100vw;
    padding: ${theme.space.inset.l};
    padding-top: ${theme.header.height.homepage};

    @media (min-width: 600){
      background-image: url(${backgrounds.tablet});
    }

    @media (min-width: 1024){
      background-image: url(${backgrounds.desktop});
    }
  `

  const H1 = styled.h1`
    pointer-events: none;
    text-align: center;
    font-size: ${theme.hero.h1.size};
    margin: ${theme.space.stack.l};
    color: ${theme.hero.h1.color};
    line-height: ${theme.hero.h1.lineHeight};
    /* text-remove-gap: both 0 "Open Sans"; */

    @media (min-width: 600){
      max-width: 90%;
      font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
    }

    @media (min-width: 1024){
      max-width: 80%;
      font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
    }

    :global(strong) {
      position: relative;

      &::after,
      &::before {
        content: "›";
        color: ${theme.text.color.attention};
        margin: 0 ${theme.space.xs} 0 0;
        text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
      }
      &::after {
        content: "‹";
        margin: 0 0 0 ${theme.space.xs};
      }
    }
  `
  const Button = styled.button`
    background: rgb(0, 0, 0, 0);
    border: none;
    border-radius: 50%;
    font-size: ${theme.font.size.m};
    padding: ${theme.space.s} ${theme.space.m};
    cursor: pointer;
    width: ${theme.space.xl};
    height: ${theme.space.xl};

    @media (min-width: 600){
      font-size: ${theme.font.size.l};
    }

    @media (min-width: 1024){
      font-size: ${theme.font.size.xl};
    }

    &:focus {
      outline-style: none;
      background: ${theme.color.brand.primary.active};
    }

    :global(svg) {
      position: relative;
      top: 5px;
      fill: ${theme.color.neutral.white};
      stroke-width: 40;
      stroke: ${theme.color.neutral.white};
      animation-duration: ${theme.time.duration.long};
      animation-name: ${buttonIconMove};
      animation-iteration-count: infinite;
    }

    &:hover {
      animation: ${buttonIconHover} ease-in-out .5s forwards;
    }
  `

  const buttonIconHover = keyframes`
    0% {
      background: rgb(0, 0, 0, 0);
    }
    100% {
      background: ${theme.color.brand.primary};
    }
  `

  const buttonIconMove = keyframes`
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  `

  return (
    <React.Fragment>
      <Shero className="hero">
        <H1>
          Hiya - I'm Hana. Welcome to my website.
        </H1>
        <Button onClick={scrollToContent} aria-label="scroll">
          <FaChevronDown />
        </Button>
      </Shero>

      {/* --- STYLES --- */}
      {/* <style jsx>{`
        .hero {
          align-items: center;
          background: ${theme.hero.background};
          background-image: url(${backgrounds.mobile});
          background-size: cover;
          color: ${theme.text.color.primary.inverse};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 100vh;
          min-width: 100vw;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
        }

        h1 {
          pointer-events: none;
          text-align: center;
          font-size: ${theme.hero.h1.size};
          margin: ${theme.space.stack.l};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Open Sans";

          :global(strong) {
            position: relative;

            &::after,
            &::before {
              content: "›";
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
              text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
            }
            &::after {
              content: "‹";
              margin: 0 0 0 ${theme.space.xs};
            }
          }
        }

        button {
          background: rgb(0, 0, 0, 0);
          border: none;
          border-radius: 50%;
          font-size: ${theme.font.size.m};
          padding: ${theme.space.s} ${theme.space.m};
          cursor: pointer;
          width: ${theme.space.xl};
          height: ${theme.space.xl};

          &:focus {
            outline-style: none;
            background: ${theme.color.brand.primary.active};
          }

          :global(svg) {
            position: relative;
            top: 5px;
            fill: ${theme.color.neutral.white};
            stroke-width: 40;
            stroke: ${theme.color.neutral.white};
            animation-duration: ${theme.time.duration.long};
            animation-name: buttonIconMove;
            animation-iteration-count: infinite;
          }
        }

        button:hover {
          animation: buttonIconHover ease-in-out .5s forwards;
        }

        @keyframes buttonIconHover {
          0% {
            background: rgb(0, 0, 0, 0);
          }
          100% {
            background: ${theme.color.brand.primary};
          }
        }

        @keyframes buttonIconMove {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @from-width tablet {
          .hero {
            background-image: url(${backgrounds.tablet});
          }

          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
          }

          button {
            font-size: ${theme.font.size.l};
          }
        }

        @from-width desktop {
          .hero {
            background-image: url(${backgrounds.desktop});
          }

          h1 {
            max-width: 80%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
          }

          button {
            font-size: ${theme.font.size.xl};
          }
        }
      `}</style> */}
    </React.Fragment>
  );
};

Hero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  backgrounds: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Hero;
