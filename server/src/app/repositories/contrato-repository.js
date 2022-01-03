const db = require('../../database');

class ContratoRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
    SELECT *
    FROM contrato
    ORDER BY data ${direction}`);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM contrato WHERE id = $1', [id]);
    return row;
  }

  async create({
    descricao,
    data,
    id_imovel,
    id_fiador,
  }) {
    const contrato = await db.query(
      `INSERT INTO contrato(
        descricao,
        data,
        id_imovel,
        id_fiador)
       VALUES($1, $2, $3, $4)
       RETURNING *`,
      [descricao,
        data,
        id_imovel,
        id_fiador],
    );
    return contrato;
  }

  async update(
    id,
    descricao,
    data,
    id_imovel,
    id_fiador,
  ) {
    const contrato = await db.query(
      `UPDATE contrato
        SET
          descricao = $1,
          data = $2,
          id_imovel = $3,
          id_fiador = $4
        WHERE id = $5
        RETURNING *`,
      [descricao,
        data,
        id_imovel,
        id_fiador,
        id],
    );
    return contrato;
  }

  async delete(id) {
    const response = await db.query('DELETE FROM contrato WHERE id = $1', [id]);
    return response;
  }
}

module.exports = new ContratoRepository();
