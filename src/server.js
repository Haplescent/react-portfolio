var express = require('express')

var PORT = process.env.PORT || 3000

var app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(`${__dirname}/public`))

// Requiring our routes
require('./routes/html-routes.js')(app)

// Syncing our database and logging a message to the user upon success

app.listen(PORT, function () {
  console.log(
    '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
    PORT,
    PORT
  )
})
