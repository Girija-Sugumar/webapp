const express = require('express')
const app = express()
const port = 7000

app.get('/', (req, res) => {
  res.send('welcome')
})

app.get('/api/', (req, res) => {
    res.send('deploy to azure webapp')
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})