const express = require('express')
const exphbs = require('express-handlebars')


const app = express()
const port = 3000

//setting template engine
app.engine('hbs', exphbs.engine({ defaultLayot: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs') //啟動引擎



app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`server is running on localhost:${port}`)
})