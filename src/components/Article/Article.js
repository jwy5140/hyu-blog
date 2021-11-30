import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components"

const Article = props => {
  const { children, theme } = props;

  const Styles = styled.span`
    .article {
      padding: ${theme.space.inset.default};
      margin: 0 auto;
    }
    @media (min-width: 800px) {
      .article {
        padding: ${`calc(${theme.space.default}) calc(${theme.space.default} * 2)`};
        max-width: ${theme.text.maxWidth.tablet};
      }
    }
    @media (min-width: 1024px) {
      .article {
        padding: ${`calc(${theme.space.default} * 2 + 90px) 0 calc(${
          theme.space.default
        } * 2)`};
        max-width: ${theme.text.maxWidth.desktop};
      }
    }
  `
  return (
    <Styles>
      <article className="article">{children}</article>
    </Styles>
  );
};

export default Article;
