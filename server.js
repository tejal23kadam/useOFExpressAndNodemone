
const data1 = require('./apiData')
const express = require('express')

const app = express()
const myArray = data1.largeArrayFunction();

const PORT = 4000;

app.get('/', (req, res) => { 
  res.send(myArray)
})
app.get('/api/data', (req, res) => {
  res.send(myArray)
})
app.get('/about', (req, res) => {
  res.send('this is about page')
})
app.get('/about1', (req, res) => {
  res.send('this is about page1')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})