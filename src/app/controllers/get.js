const faker = require('faker');

module.exports = (req, res) => {
    var users = [{
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/300/300'
    }, {
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/400/300'
    }, {
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/500/300'
    }];

    connection.query('SELECT * FROM cliente', function(err, result) {
      if(err){
          throw err;
      } else {
        res.render('pages/home', {
            title: "HOME",
            data: result,
            usuarios: users
        });               
      }
    });
    
}