const express = require('express')
const data = require('./data.js')
const mustacheExpress = require('mustache-express')

const app = express()

app.use(express.static('public'))

app.engine('mustache', mustacheExpress())
app.set('views', './templates')
app.set('view engine', 'mustache')

app.get('/', (request, response) => {
  response.render('index', data)
})

app.get('/info/:username', (request, response) => {
  response.render(
    'info',
    data.users.find(function(user) {
      return user.username === request.params.username
    })
  )
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
