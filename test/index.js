const translit = require('translit')
const express = require('express')

const { transliterationSorting } = require('../index')
const list = require('./list')

const app = express()

app.get('/', function (req, res) {
  list.forEach(it => {
    const r = translit("Козырёв")
    console.log(r)
  })
  res.send(list)
  transliterationSorting()
})

app.listen(3010, function () {
  console.log('Example app listening on port 3010!')
})
