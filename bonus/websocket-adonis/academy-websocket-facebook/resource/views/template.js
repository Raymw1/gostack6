const Template = {
  notification ({ content }) {
    return `<li>
    <div class="profile">
      <img src="images/avatar.png" alt="Avatar">
      <div class="info">
        ${content}
      </div>
    </div>
    <a href="">x</a>
  </li>`
  },
  post ({
    id,
    content,
    user: { username: user },
    created_at: published,
    comments,
    __meta__: { likes_count = 0 } = {}
  }) {
    return `<li>
    <div class="post-wrapper">
      <div class="header">
        <img src="images/avatar.png" alt="Avatar">
        <div class="info">
          <span class="user">${user}</span>
          <span class="datetime">${published}</span>
        </div>
      </div>
      <div class="post">
        <p>${content}</p>
      </div>
      <div class="interactions">
        <div class="actions">
          <span class="likes" data-post-id="${id}">${likes_count}</span>
          <a class="like like-post" href="" data-id="${id}"><img src="images/like.svg" alt="Likes" /> Curtir</a>
          <a href=""><img src="images/comment.svg" alt="Comment" />Comentar</a>
        </div>
        <div class="comments">${comments.length} comentários</div>
      </div>
      <div data-post-id="${id}" class="comments">
        <ul>
          <li>
            <div class="comment">
              <img src="images/avatar.png" alt="Avatar">
              <div class="info">
                <span class="user">Claudio Orlandi</span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et
                dolore magna aliqua.
                <div class="interactions">
                  <div class="actions">
                    <span class="likes" data-comment-id="1">1</span>
                    <a href="" class="like like-comment" data-id="1" data-post-id="1"><img src="images/like.svg"
                        alt="Likes" /> Curtir</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="comment-area">
      <div class="group">
        <img class="avatar" src="images/avatar.png" alt="Diego Fernandes">
        <textarea data-post-id="1" placeholder="Comment this post"></textarea>
      </div>
      <button data-post-id="1" class="uibutton large confirm comment-post" type="submit">Comment</button>
    </div>
  </li>`
  }
}
