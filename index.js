var express = require('express')

var indexRouter = require('./routes')
var app = express()

app.use('/', indexRouter)

var listener = app.listen(3000, function () {
	console.log('Listening on port ' + listener.address().port)
})
