const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  try{
    res.send('GET wiki')

  } catch(err) { next(err) }
})

router.post('/', (req, res, next) => {
  try{
    res.send('POST to wiki')

  } catch(err) { next(err) }
})

router.get('/add', (req, res, next) => {
  try{
    res.send('GET wiki/add')

  } catch(err) { next(err) }
})