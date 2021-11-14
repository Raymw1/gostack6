"use strict";

const Comment = use("App/Models/Comment");

class CommentController {
  async index({ request, params }) {
    const comments = await Comment.query()
      .withLikes()
      .with("user")
      .where("post_id", params.posts_id)
      .fetch();

    return comments;
  }

  async store({ request, params, auth }) {
    const content = request.input("content");

    const comment = await Comment.create({
      content,
      user_id: auth.user.id,
      post_id: params.posts_id
    });

    await comment.load("user");

    return comment;
  }
}

module.exports = CommentController;
