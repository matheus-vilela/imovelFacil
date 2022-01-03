const db = require('../../database');

class EnderecoRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
    SELECT *
    FROM endereco
    ORDER BY estado ${direction}`);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM endereco WHERE id = $1', [id]);
    return row;
  }
}

module.exports = new EnderecoRepository();
