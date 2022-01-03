const db = require('../../database');

class FiadorRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
    SELECT *
    FROM fiador
    ORDER BY nome ${direction}`);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM fiador WHERE id = $1', [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM fiador WHERE email = $1', [email]);
    return row;
  }

  async findByAddress(endereco) {
    const [row] = await db.query(
      `SELECT *
      FROM endereco
      WHERE rua = $1 AND numero = $2 AND bairro = $3 AND complemento = $4 AND cidade = $5 AND estado = $6`,
      [endereco.rua,
        endereco.numero,
        endereco.bairro,
        endereco.complemento,
        endereco.cidade,
        endereco.estado],
    );
    return row;
  }

  async create({
    nome,
    telefone,
    email,
    salario,
    endereco,
  }) {
    const [address] = await db.query(
      'INSERT INTO endereco(rua,numero,bairro,complemento,cidade,estado,cep) VALUES($1, $2, $3, $4, $5, $6,$7) RETURNING *',
      [endereco.rua,
        endereco.numero,
        endereco.bairro,
        endereco.complemento,
        endereco.cidade,
        endereco.estado,
        endereco.cep],
    );
    const fiador = await db.query(
      `INSERT INTO fiador(
        nome,
        telefone,
        email,
        salario,
        endereco
        )
       VALUES($1, $2, $3, $4, $5)
       RETURNING *`,
      [nome, telefone, email, salario, address.id],
    );
    return fiador;
  }

  async update(id, nome, telefone, email, salario, endereco) {
    const [row] = await db.query('SELECT * FROM fiador WHERE id = $1', [id]);
    await db.query(
      `UPDATE endereco
        SET rua = $1,
          numero = $2,
          bairro = $3,
          complemento = $4,
          cidade = $5,
          estado = $6
          cep = $7,
          WHERE id = $8
          RETURNING *`,
      [endereco.rua,
        endereco.numero,
        endereco.bairro,
        endereco.complemento,
        endereco.cidade,
        endereco.estado,
        endereco.cep,
        row.endereco],
    );

    const fiador = await db.query(
      `UPDATE fiador
        SET
          nome = $1,
          telefone = $2,
          email = $3,
          salario = $4,
          endereco = $5
        WHERE id = $6
        RETURNING *`,
      [nome,
        telefone,
        email,
        salario,
        row.endereco,
        id],
    );
    return fiador;
  }

  async delete(id) {
    const [fiador] = await db.query('SELECT * FROM fiador WHERE id = $1', [id]);
    const response = await db.query('DELETE FROM fiador WHERE id = $1', [id]);
    await db.query('DELETE FROM endereco WHERE id = $1', [fiador.endereco]);
    return response;
  }
}

module.exports = new FiadorRepository();
