//載入json
const userList = require('../../users.json').users

const User = require('../users') //載入User model

//引用連線設定
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('add seed data')
  User.create(userList)
    .then(() => {
      console.log('Done')
    })
    .catch(err => {
      console.log(err)
    })
})