'use strict'

let online

const urlParams = new URLSearchParams(window.location.search)

const token = urlParams.get('token')
const userId = urlParams.get('id')

if (!token || !userId) alert('You need a token and the userId')

function start() {
  let ws = adonis.Ws('ws://localhost:3333')
  ws.withJwtToken(token)
  ws = ws.connect()
  ws.on('open', () => {
    online = true
  })
  ws.on('error', () => {
    online = false
  })
  return ws
}

function ajax(url, data, method = 'post') {
  return $.ajax(`http://localhost:3333${url}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`
    },
    dataType: 'json',
    data
  })
}
