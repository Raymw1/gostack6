import React, { Component, Fragment } from "react";

import Header from "./components/Header";
import Post from "./components/Post";

import "./App.scss";

export default class App extends Component {
  state = {
    posts: [
      {
        info: {
          id: 1,
          avatar: "https://github.com/Raymw1.png",
          name: "Rayan Wilbert",
          createdAt: "há 3 min",
        },
        content:
          "Rorem ipsum dolor sit amet consectetur adipisicing elit. Officia atque quo labore excepturi eius a error assumenda iste quis soluta amet recusandae dolorem inventore, qui incidunt. Quas odit velit deleniti!",
      },
      {
        info: {
          id: 2,
          avatar: "https://github.com/maykbrito.png",
          name: "Maykão",
          createdAt: "há 59 min",
        },
        content:
          "Porem ipsum dolor sit amet consectetur adipisicing elit. Officia atque quo labore excepturi eius a error assumenda iste quis soluta amet recusandae dolorem inventore, qui incidunt. Quas odit velit deleniti!",
      },
      {
        info: {
          id: 3,
          avatar: "https://github.com/diego3g.png",
          name: "Diegão",
          createdAt: "há 23 min",
        },
        content:
          "Sorem ipsum dolor sit amet consectetur adipisicing elit. Officia atque quo labore excepturi eius a error assumenda iste quis soluta amet recusandae dolorem inventore, qui incidunt. Quas odit velit deleniti!",
      },
    ],
  };
  render() {
    return (
      <Fragment>
        <Header />
        <div className="posts">
          {this.state.posts.map((post) => (
            <Post key={post.info.id} post={post} />
          ))}
        </div>
      </Fragment>
    );
  }
}
