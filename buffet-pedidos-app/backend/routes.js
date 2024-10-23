const express = require('express');
const router = express.Router();

// Exemplo de rota GET
router.get('/salgados', (req, res) => {
    // Aqui você pode retornar uma lista de salgados
    res.json({ message: 'Lista de salgados' });
});

// Exemplo de rota POST
router.post('/pedidos', (req, res) => {
    // Aqui você pode processar um novo pedido
    const pedido = req.body;
    res.status(201).json({ message: 'Pedido criado', pedido });
});

module.exports = router;
