"use strict";

const Post = use("App/Models/Post");

class PostController {
  async index({ request }) {
    const posts = await Post.query()
      .withCount("likes")
      .with("user")
      .with("comments", builder => builder.with("user").withCount("likes"))
      .orderBy("created_at", "desc")
      .fetch();

    return posts;
  }

  async store({ request, auth }) {
    const content = request.input("content");
    const post = await Post.create({ content, user_id: auth.user.id });

    await post.load("user");
    await post.load("comments");

    return post;
  }
}

module.exports = PostController;
