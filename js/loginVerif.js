/*const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Configura o middleware body-parser para analisar os dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/login-form', function(req, res) {
  res.sendFile(path.join(__dirname + '/login.html'));
});

app.post('/login-form', function(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  // Aqui você pode adicionar o código para verificar o nome de usuário e a senha
  // Por exemplo, você pode verificar em um banco de dados se o nome de usuário e a senha estão corretos
  // Se estiverem corretos, você pode redirecionar o usuário para a página inicial
  // Se estiverem incorretos, você pode enviar uma mensagem de erro

  res.send('Nome de usuário: ' + username + ', Senha: ' + password);
});

app.listen(5501, function() {
  console.log('Aplicativo ouvindo na porta 3000!');
});
*/