import React from "react";
import styled from "styled-components";

import Item from "./Item";

const Blog = ({posts,theme}) => {
  // const { posts, theme } = props;

  const Styles = styled.span`
    .main {
      padding: 0 ${theme.space.inset.default};
    }

    ul {
      list-style: none;
      margin: 0 auto;
      padding: ${`calc(${theme.space.default} * 1.5) 0 calc(${theme.space.default} * 0.5)`};
    }

    @media (min-width: 600px) {
      .main {
        padding: 0 ${`0 calc(${theme.space.default} * 1.5)`};
      }
      ul {
        max-width: ${theme.text.maxWidth.tablet};
      }
    }
    @media (min-width: 1024px) {
      ul {
        max-width: ${theme.text.maxWidth.desktop};
      }
    }
  `

  return (
    <Styles>
      <main className="main">
        <ul>
          {posts.map(post => {
            const {
              node,
              node: {
                fields: { slug }
              }
            } = post;
            return <Item key={slug} post={node} theme={theme} />;
          })}
        </ul>
      </main>
    </Styles>
  );
};


export default Blog;
