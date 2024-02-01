const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
  host:'sql6.freesqldatabase.com',
  user:'sql6681328',
  password:'LzkGlElYIZ',
  database:'sql6681328',
  
})

module.exports=mysqlPool;