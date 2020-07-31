README - Guia de instalçao do APP.

1) Na sua base de dados execute a query abaixo para criar a tabela Optin:
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

2) Na estrutura de pasta SRC/CONFIG, abra o arquivo db-config.js e altere os dados de conexão com o seu banco.

3) Na raiz do projeto execute o comando: $ npm install.

4) Após a instalação, execute $ node app.js - A aplicação irá rodar na portal 8080. 
   Para acessar digite no navegador: http://localhost:8080
   O link API, envia para uma tela de consumo dos dados dinâmico onde utilizo o último parametro da URL como o nome da base de dados, ou seja, http://localhost:8080/api/view/optin o /optin pode ser trocado por /cliente ou /usuarios assim acessando a tabela que desejar.
