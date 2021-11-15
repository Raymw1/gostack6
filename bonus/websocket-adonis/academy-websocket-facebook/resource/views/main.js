;(async function ($) {
  let ws = start()

  let posts = await ajax('/posts', null, 'get')
  posts.map((post) => $('.posts').append(Template.post(post)))

  posts = ws.subscribe('posts')
  posts.on('new', (post) => $('.posts').prepend(Template.post(post)))

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
})(jQuery)
