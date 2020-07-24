function _save(conn) {
    const sql = "INSERT INTO Clientes(Nome,CPF) VALUES ?";
    const values = [
        ['teste1', '12345678901'],
        ['teste1', '09876543210'],
        ['teste3', '12312312399']
    ];
    conn.query(sql, [values], function (error, results, fields) {
        if (error)
            return console.log(error);
        console.log('adicionou registros!');
        conn.end();//fecha a conexão
    });
}

function execSQLQuery(sqlQry, res, conn) {

    conn.query(sqlQry, function (error, results, fields) {
        if (error)
            res.json(error);
        else
            res.json(results);
        conn.end();
        console.log('executou!');
    });
}