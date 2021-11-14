"use strict";

const Model = use("Model");

class Comment extends Model {
  static scopeWithLikes(query) {
    return query.select("*", function() {
      return this.count("*")
        .from("like_comments")
        .whereRaw("comment_id = comments.id")
        .as("likes");
    });
  }

  post() {
    return this.belongsTo("App/Models/Post");
  }

  user() {
    return this.belongsTo("App/Models/User");
  }

  likes() {
    return this.hasMany("App/Models/LikeComment");
  }
}

module.exports = Comment;
