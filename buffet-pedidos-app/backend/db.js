const { Pool } = require('pg');

// Configuração da conexão com o banco de dados
const pool = new Pool({
    user: 'seu_usuario', // substitua pelo seu usuário
    host: 'localhost',
    database: 'buffet', // substitua pelo nome do seu banco de dados
    password: 'sua_senha', // substitua pela sua senha
    port: 5432,
});

// Função para testar a conexão
const conectarDB = async () => {
    try {
        await pool.connect();
        console.log('Conexão com o banco de dados estabelecida!');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
};

conectarDB();

module.exports = pool;
