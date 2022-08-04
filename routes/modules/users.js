const express = require('express')
const router = express.Router()

//引用 User model
const User = require('../../models/users')

router.get('/page', (req, res) => {
  res.render('user')
})


module.exports = router