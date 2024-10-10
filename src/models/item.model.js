const pool = require("../config/database"); // Importanto conexão do banco de dados

// Função que retorna todos os itens armazenados
async function listItems() {
  const buscarItems = await pool.query('SELECT * FROM items');

  return buscarItems[0];
};

// Função que cria um novo item e o adiciona à lista
async function createItem(name) {
  const newItem = await pool.query(`INSERT INTO items (name) VALUES ('${name}')`)

  return newItem[0];
};


module.exports = {
  listItems,
  createItem
}
