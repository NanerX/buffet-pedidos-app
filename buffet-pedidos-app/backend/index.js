const express = require('express');
const app = express();
const PORT = 3000;
const pool = require('./db'); // Importa a conexão

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API do Buffet - Funcionando!');
});

// Exemplo de rota para obter dados
app.get('/items', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM items');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar itens');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
