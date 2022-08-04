const express = require('express')
const exphbs = require('express-handlebars')

const routes = require('./routes') // 引用路由器
require('./config/mongoose')  //引用mongoose連線設定

const app = express()
const port = 3000

//setting template engine
app.engine('hbs', exphbs.engine({ defaultLayot: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs') //啟動引擎

app.use(routes) //將請求導入路由器


app.listen(port, () => {
  console.log(`server is running on localhost:${port}`)
})