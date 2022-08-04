const express = require('express')
const router = express.Router()

// 引用 User model
const User = require('../../models/users')

//定義首頁路由
router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  
})

//匯出
module.exports = router