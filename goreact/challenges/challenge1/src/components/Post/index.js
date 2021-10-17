import React, { Component } from "react";

import Header from "./Header";

import "./Post.scss";

const Post = (props) => (
  <div className="post">
    <Header info={props.post.info} />
    <p className="content">{props.post.content}</p>
  </div>
);

export default Post;
