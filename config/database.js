const mysql = require('mysql2');

const connection = mysql.createConnection({
    user: 'root',
    password: '',
    host: 'localhost',
    database: 'star_wars',
});
connection.connect((err) => {
    if(err){
        console.error('Error connecting to MySQL:', err);
        return;
    } 
    console.log('connected to MySQL');
});
module.exports = connection;