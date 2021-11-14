;(function ($) {
  let ws = start()

  const posts = ws.subscribe('posts')

  posts.on('new', post => $('.posts').prepend(Template.post(post)))
  posts.on('likes', likes => $likes(likes))

  const notification = ws.subscribe(`notification:${userId}`)
  notification.on('message', notification =>
    $('.notification > ul').prepend(Template.notification(notification))
  )

  ajax('/posts', null, 'get')
    .then(posts => {
      posts.map(post => $('.posts').append(Template.post(post)))
    })
    .catch(e => {
      console.log(e)
    })

  $('#publish-post').on('click', async () => {
    const content = $('#post').val()
    $('#post').val('')

    if (!content) {
      alert('Escreva alguma coisa para postar!')
      return
    }

    const post = await ajax('/posts', {
      content
    })
  })

  $('body').on('click', '.like-post', async function (e) {
    e.preventDefault()
    const id = $(this).data('id')
    const likes = await ajax(`/posts/${id}/likes`)
  })
})(jQuery)
