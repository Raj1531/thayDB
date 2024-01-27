const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
  host:'sql6.freesqldatabase.com',
  user:'sql6679738',
  password:'npHkNJRhfz',
  database:'sql6679738',
  
})

module.exports=mysqlPool;