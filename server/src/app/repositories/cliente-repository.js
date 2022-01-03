const db = require('../../database');

class ClienteRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
    SELECT *
    FROM cliente
    ORDER BY nome ${direction}`);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM cliente WHERE id = $1', [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM cliente WHERE email = $1', [email]);
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
    const cliente = await db.query(
      `INSERT INTO cliente(
        nome,
        telefone,
        email,
        endereco)
       VALUES($1, $2, $3, $4)
       RETURNING *`,
      [nome, telefone, email, address.id],
    );
    return cliente;
  }

  async update(id, nome, telefone, email, endereco) {
    const [row] = await db.query('SELECT * FROM cliente WHERE id = $1', [id]);
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

    const cliente = await db.query(
      `UPDATE cliente
        SET
          nome = $1,
          telefone = $2,
          email = $3,
          endereco = $4
        WHERE id = $5
        RETURNING *`,
      [nome,
        telefone,
        email,
        row.endereco,
        id],
    );
    return cliente;
  }

  async delete(id) {
    const [cliente] = await db.query('SELECT * FROM cliente WHERE id = $1', [id]);
    const response = await db.query('DELETE FROM cliente WHERE id = $1', [id]);
    await db.query('DELETE FROM endereco WHERE id = $1', [cliente.endereco]);
    return response;
  }
}

module.exports = new ClienteRepository();
