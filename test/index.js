const express = require('express')
const app = express()
const { transliterationSorting } = require('../index')

app.get('/', function (req, res) {
  res.send('Hello World!')
  transliterationSorting()
})

app.listen(3010, function () {
  console.log('Example app listening on port 3010!')
})
