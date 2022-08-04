const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const routes = require('./routes') // 引用路由器
require('./config/mongoose')  //引用mongoose連線設定

const app = express()
const port = 3000

//setting template engine
app.engine('hbs', exphbs.engine({ defaultLayot: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs') //啟動引擎

//用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes) //將請求導入路由器


app.listen(port, () => {
  console.log(`server is running on localhost:${port}`)
})