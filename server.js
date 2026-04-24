const express = require('express');
const app = express();
app.use(express.json());

const rotaBiblioteca = require('./src/routes/biblioteca');
const rotaJogos = require('./src/routes/jogos');
const rotaProdutoras = require('./src/routes/produtoras');
const rotaUsuario = require('./src/routes/usuarios');

app.use('/biblioteca', rotaBiblioteca);
app.use('/jogos', rotaJogos);
app.use('/produtoras', rotaProdutoras); 
app.use('/usuario', rotaUsuario);

app.get('/', (req, res) => {
    res.json({ mensagem: 'Servidor do Antonio Paulo Pereira Fidel' });
});

app.listen(3001, () => {
    console.log(`Servidor rodando com sucesso na porta 3001`);
});