//總路由器

const express = require('express')
const router = express.Router()

//引用 home 程式碼模組
const home = require('./modules/home')

//將網址結構符合 ／ 字串的 request 導向home 模組
router.use('/', home)

//匯出路由器
module.exports = router