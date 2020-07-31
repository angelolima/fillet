# README - Guia de instalçao do APP.

Na sua base de dados execute a query abaixo para criar a tabela Optin:

## Criando tabela do Banco de Dados
 

```bash
CREATE TABLE `optin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `sobrenome` varchar(100) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `telefone` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
```

## Instalação
Na estrutura de pasta SRC/CONFIG, abra o arquivo db-config.js e altere os dados de conexão com o seu banco.

```node
let config = {
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : '****',
    database : 'base'
};
```
Na raiz do projeto execute o comando: 
## $ npm install

Após a instalação, execute 
## $ node app.js

```html
let config = {
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : '****',
    database : 'base'
};
```

A aplicação irá rodar na portal 8080.\
Para acessar digite no navegador: http://localhost:8080 \
O link API, envia para uma tela de consumo dos dados dinâmico onde utilizo o último parametro da URL como o nome da base de dados, ou seja, http://localhost:8080/api/view/optin o /optin pode ser trocado por /cliente ou /usuarios assim acessando a tabela que desejar.

##
Este app foi desenvolvido como teste para Fillet por Angelo Lima.

## License
[MIT](https://choosealicense.com/licenses/mit/)