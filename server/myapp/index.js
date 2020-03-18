const path=require('path')
var express = require('express')
var app = express()

app.use('/', express.static(path.resolve(__dirname,'../../client/dist')))

app.use(function (req, res, next) {
  res.status(404).sendFile(path.resolve(__dirname,'../../client/404.html'))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

