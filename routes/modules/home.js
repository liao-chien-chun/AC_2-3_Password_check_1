const express = require('express')
const router = express.Router()

// 引用 User model
const User = require('../../models/users')

//定義首頁路由
router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const { email, password } = req.body
  User.findOne({ email: email, password: password })
    .then(user => {
      if (!user) {
        return res.render('index', { text: '郵件或密碼錯誤' })
      }
      res.render('user', { user: user.firstName })
    })
})

//匯出
module.exports = router