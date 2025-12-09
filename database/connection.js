const mysql2 = require('mysql2')

const connection = mysql2.connection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'blog'
})


module.exports = connection