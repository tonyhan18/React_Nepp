import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineEye, AiOutlineMessage } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FiThumbsUp } from "react-icons/fi";

const GlobalArticleCard = ({ article }) => {
  return (
    <GlobalArticleCardBlock>
      <div class="head">
        <Link to={article.key} className="title">
          {article.title}
        </Link>
      </div>
      <div class="body">
        <Link to={article.key} className="content">
          {article.content}
        </Link>
        <div class="info">
          <Link to={article.key} className="company">
            {article.author}
          </Link>
          <Link to={article.key}>·</Link>
          <Link to={article.key} className="nickname">
            {article.author}
          </Link>
        </div>
      </div>
      <div class="foot">
        <div class="left">
          <Link to={article.key} className="count">
            <AiOutlineEye size="16" className="icon" />
            {article.viewCount}
          </Link>
          <Link to={article.key} className="count">
            <FiThumbsUp size="16" className="icon" />

            {article.thumbupCount}
          </Link>
          <Link to={article.key} className="count">
            <AiOutlineMessage class="icon" size="16" />
            {article.commentCount}
          </Link>
        </div>
        <div class="right">
          <Link to={article.key}>{new Date(article.createdAt).getTime()}</Link>
          <BsFillBookmarkFill class="icon" size="16" />
        </div>
      </div>
    </GlobalArticleCardBlock>
  );
};

const GlobalArticleCardBlock = styled.article`
  padding: 20px;
  border-bottom: 1px solid #eee;
  a {
    color: #222;
  }
  &:nth-child(2n - 1) {
    border-right: 1px solid #eee;
  }
  .head {
    .title {
      display: block;
      font-weight: bold;
      font-size: 18px;
      line-height: 1.4em;
      margin-top: 1px;
      height: 52px;
      margin-bottom: 0;
    }
  }
  .body {
    .content {
      margin-top: 4px;
      color: #222;
      display: block;
      font-size: 14px;
      line-height: 1.25em;
    }
    .info {
      margin-top: 20px;
      display: block;
    }
  }
  .foot {
    display: flex;
    margin-top: 8px;
    justify-content: space-between;
    opacity: 0.4;
    .count {
      margin-right: 15px;
      .icon {
        position: relative;
        top: 1px;
      }
    }
  }
`;
export default GlobalArticleCard;
