const mysql = require('mysql');
const faker = require('faker');
const connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : 'tripno08',
  database : 'sysfit'
});

module.exports = (req, res) => { 
    connection.query('SELECT * FROM '+req.params.table, function(err, result) {
      if(err){
          throw err;
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ data: result }, null, 3));    
      }
    });
    
}
 