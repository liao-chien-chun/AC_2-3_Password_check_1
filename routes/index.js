//總路由器

const express = require('express')
const router = express.Router()

//引用 home 程式碼模組
const home = require('./modules/home')
//引用 users 程式碼模組
const users = require('./modules/users')


//將網址結構符合 ／ 字串的 request 導向home 模組
router.use('/', home)
//將網址結構符合 ／users 字串的 request 導向users 模組
router.use('/user', users)

//匯出路由器
module.exports = router