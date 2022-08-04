const mongoose = require('mongoose')

//建立連線
mongoose.connect(process.env.MONGODB_URI5, { useNewUrlParser: true, useUniFiedTopology: true})

//取得連線狀態
const db = mongoose.connection
//失敗
db.on('errpr', () => {
  console.log('mongodb error')
})
//成功
db.once('open', () => {
  console.log('mongodb connected')
})

//匯出
module.exports = db