const mysql = require('mysql');

function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
      host     : 'localhost',
      port     : 3306,
      user     : 'root',
      password : 'tripno08',
      database : 'sysfit'
    });
   
    connection.query(sqlQry, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
        connection.end();
    });
  }

module.exports = (req, res) => {
    res.sendfile('./src/app/html/apiform.html')
}