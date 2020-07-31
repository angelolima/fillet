const expressValidator = require('express-validator');

module.exports = (req, res) => { 
   
    // Array de erros para feedback do servidor.
    var errors = [];
    // Evento para capturar mensagens de erros e adicioná-las ao array de erros.
    
    // Dados do formulário submetido.
    var optin = req.body.optin;

    // Validando dados.
    if(optin.nome === ''){
      errors['nome'] = 'Nome inválido';
    }
    if(optin.email === ''){
      errors['telefone'] = 'Telefone inválido';
    }
    if(optin.password !== optin.repassword ){
      errors['password'] = 'Senhas não conferem';
    }

    // Preparando mensagem de sucesso e erro.
  if (errors.length) {
    res.send('Erros: ' + errors.join(', '), 500);
  }else{

    let stmt = `INSERT INTO optin (nome, sobrenome, email, telefone, password)  VALUES (?,?,?,?,?)`;
    let todos = [
      optin.nome.trim(String), 
      optin.sobrenome.trim(String), 
      optin.email.trim(String),
      optin.telefone.trim(String),
      optin.password.trim(String)
    ];

    // execute the insert statment
    connection.query(stmt, todos, (err, results, fields) => {
      if (err) { 
        // get inserted rows
      res.render('pages/home', {
        title: "HOME",
        error: err.message
    });
      }
      // get inserted rows
      res.render('pages/home', {
          title: "HOME"
      });
    });

    // close the database connection
    connection.end();
  }

    
    
   
    
}