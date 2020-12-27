const express = require('express')
const app = express()
app.use(express.static('public'))

const db = require('../db/db.js')



app.get('/category', (req, res) => {

  res.json({
    id: 01,
    name: 'veg'
  })
  db.create()
})

module.exports = app;