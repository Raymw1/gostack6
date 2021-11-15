;(async function ($) {
  let ws = start()

  let posts = await ajax('/posts', null, 'get')
  posts.map((post) => $('.posts').append(Template.post(post)))

  posts = ws.subscribe('posts')
  posts.on('new', (post) => $('.posts').prepend(Template.post(post)))
  posts.on('likes', (likes) => $likes(likes))

  $('#publish-post').on('click', async () => {
    const content = $('#post').val()
    $('#post').val('')
    if (!content) {
      alert('Write something to post!')
      return
    }
    await ajax('/posts', {
      content
    })
  })

  $('body').on('click', '.like-post', async function (event) {
    event.preventDefault()
    const id = $(this).data('id')
    const likes = await ajax(`/posts/${id}/likes`)
  })
})(jQuery)
