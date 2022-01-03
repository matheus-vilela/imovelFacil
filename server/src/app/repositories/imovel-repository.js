const db = require('../../database');

class ImovelRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rowsCasa = await db.query(`
    SELECT *
    FROM imovel
    JOIN casa ON imovel.id = casa.id_imovel
    ORDER BY imovel.id ${direction}`);
    const rowsQuitinete = await db.query(`
    SELECT *
    FROM imovel
    JOIN quitinete ON imovel.id = quitinete.id_imovel
    ORDER BY imovel.id ${direction}`);
    const rowsApartamento = await db.query(`
    SELECT *
    FROM imovel
    JOIN apartamento ON imovel.id = apartamento.id_imovel
    ORDER BY imovel.id ${direction}`);

    return [...rowsApartamento, ...rowsCasa, ...rowsQuitinete];
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM imovel WHERE id = $1', [id]);
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
    tipo, objetivo, endereco, detalhes,
  }) {
    const [row] = await db.query(
      'INSERT INTO imovel(tipo,objetivo) VALUES($1, $2) RETURNING *',
      [tipo, objetivo],
    );
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
    if (tipo === 'casa') {
      const imovel = await db.query(
        `INSERT INTO casa(
        valor,
        area,
        descricao,
        garagem,
        quartos,
        banheiro,
        suite,
        piscina,
        endereco,
        id_imovel)
       VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
       RETURNING *`,
        [detalhes.valor,
          detalhes.area,
          detalhes.descricao,
          detalhes.garagem,
          detalhes.quarto,
          detalhes.banheiro,
          detalhes.suite,
          detalhes.piscina,
          address.id,
          row.id],
      );
      return imovel;
    }
    if (tipo === 'quitinete') {
      const imovel = await db.query(
        `INSERT INTO quitinete(
          valor,
          area,
          descricao,
          garagem,
          endereco,
          id_imovel)
         VALUES($1, $2, $3, $4, $5, $6)
         RETURNING *`,
        [detalhes.valor,
          detalhes.area,
          detalhes.descricao,
          detalhes.garagem,
          address.id,
          row.id],
      );
      return imovel;
    }
    const imovel = await db.query(
      `INSERT INTO apartamento(
        valor,
        area,
        descricao,
        garagem,
        quartos,
        banheiro,
        suite,
        piscina,
        condominio,
        portaria,
        endereco,
        id_imovel)
       VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
       RETURNING *`,
      [detalhes.valor,
        detalhes.area,
        detalhes.descricao,
        detalhes.garagem,
        detalhes.quarto,
        detalhes.banheiro,
        detalhes.suite,
        detalhes.piscina,
        detalhes.condominio,
        detalhes.portaria,
        address.id,
        row.id],
    );
    return imovel;
  }

  async update(id, detalhes) {
    const [row] = await db.query('SELECT * FROM imovel WHERE id = $1', [id]);
    const [old] = await db.query(`SELECT * FROM ${row.tipo} WHERE id_imovel = $1`, [id]);

    await db.query(
      `UPDATE endereco
      SET rua = $1,
      numero = $2,
      bairro = $3,
      complemento = $4,
      cidade = $5,
      estado = $6,
      cep = $7,
      WHERE id = $8
      RETURNING *`,
      [detalhes.endereco.rua,
        detalhes.endereco.numero,
        detalhes.endereco.bairro,
        detalhes.endereco.complemento,
        detalhes.endereco.cidade,
        detalhes.endereco.estado,
        detalhes.endereco.cep,
        old.endereco],
    );
    if (row.tipo === 'casa') {
      const imovel = await db.query(
        `UPDATE casa
        SET valor = $1,
          area = $2,
          descricao = $3,
          garagem = $4,
          quarto = $5,
          banheiro = $6,
          suite = $7,
          piscina = $8,
          endereco = $9,
          id_imovel = $10
        WHERE id_imovel = $11
        RETURNING *`,
        [detalhes.valor,
          detalhes.area,
          detalhes.descricao,
          detalhes.garagem,
          detalhes.quarto,
          detalhes.banheiro,
          detalhes.suite,
          detalhes.piscina,
          old.endereco,
          row.id,
          id],
      );
      return imovel;
    }
    if (row.tipo === 'quitinete') {
      const imovel = await db.query(
        `UPDATE quitinete
        SET valor = $1,
          area = $2,
          descricao = $3,
          garagem = $4,
          endereco = $5,
          id_imovel = $6
         WHERE id_imovel = $7
         RETURNING *`,
        [detalhes.valor,
          detalhes.area,
          detalhes.descricao,
          detalhes.garagem,
          old.endereco,
          row.id,
          id],
      );
      return imovel;
    }
    const imovel = await db.query(
      `UPDATE apartamento
      SET valor = $1,
        area = $2,
        descricao = $3,
        garagem = $4,
        quarto = $5,
        banheiro = $6,
        suite = $7,
        piscina = $8,
        condominio = $9,
        portaria = $10,
        endereco = $11,
        id_imovel = $12
      WHERE id_imovel = $13
      RETURNING *`,
      [detalhes.valor,
        detalhes.area,
        detalhes.descricao,
        detalhes.garagem,
        detalhes.quarto,
        detalhes.banheiro,
        detalhes.suite,
        detalhes.piscina,
        detalhes.condominio,
        detalhes.portaria,
        old.endereco,
        row.id,
        id],

    );
    return imovel;
  }

  async delete(id) {
    const [row] = await db.query('SELECT * FROM imovel WHERE id = $1', [id]);
    const [imovel] = await db.query('SELECT * FROM imovel WHERE id = $1', [id]);
    await db.query('DELETE FROM endereco WHERE id = $1', [imovel.endereco]);
    await db.query(`DELETE FROM ${row.tipo} WHERE id_imovel = $1`, [id]);
    const response = await db.query('DELETE FROM imovel WHERE id = $1', [id]);
    return response;
  }
}

module.exports = new ImovelRepository();
