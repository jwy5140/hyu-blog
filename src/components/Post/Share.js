import React from "react";
import styled from 'styled-components';

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareCount,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from "react-share";

import config from "../../../content/meta/config";

const PostShare = props => {
  const {
    post: {
      fields: { slug },
      frontmatter: { title },
      excerpt
    },
    theme
  } = props;

  const url = config.siteUrl + config.pathPrefix + slug;

  const iconSize = 36;
  const filter = count => (count > 0 ? count : "");

  //styles
  const Styles = styled.span`
    .share {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .links {
      display: flex;
      flex-direction: row;

      .SocialMediaShareButton {
        margin: 0 0.8em;
        cursor: pointer;
      }
    }

    .label {
      font-size: 1.2em;
      margin: 0 1em 1em;
    }

    @media (min-width: 800px) {
      .share {
        flex-direction: row;
        margin: ${theme.space.inset.l};
      }
      .label {
        margin: ${theme.space.inline.m};
      }
    }
  `

  return (
    <Styles>
      <div className="share">
        <span className="label">SHARE</span>
        <div className="links">
          <TwitterShareButton
            url={url}
            title={title}
            additionalProps={{
              "aria-label": "Twitter share"
            }}
          >
            <TwitterIcon round size={iconSize} />
          </TwitterShareButton>
          <FacebookShareButton
            url={url}
            quote={`${title} - ${excerpt}`}
            additionalProps={{
              "aria-label": "Facebook share"
            }}
          >
            <FacebookIcon round size={iconSize} />
            <FacebookShareCount url={url}>
              {count => <div className="share-count">{filter(count)}</div>}
            </FacebookShareCount>
          </FacebookShareButton>
          <LinkedinShareButton
            url={url}
            title={title}
            description={excerpt}
            additionalProps={{
              "aria-label": "LinkedIn share"
            }}
          >
            <LinkedinIcon round size={iconSize} />
          </LinkedinShareButton>
        </div>
      </div>
    </Styles>
  );
};

export default PostShare;
