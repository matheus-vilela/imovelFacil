const db = require('../../database');

class ImageRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
    SELECT *
    FROM images
    ORDER BY id_imovel ${direction}`);
    return rows;
  }

  async findById(id) {
    const rows = await db.query('SELECT * FROM images WHERE id_imovel = $1', [id]);
    return rows;
  }

  async create({
    index,
    url,
    id_imovel,
  }) {
    const images = await db.query(
      `INSERT INTO images(
        index,
        url,
        id_imovel
        )
       VALUES($1, $2, $3)
       RETURNING *`,
      [index,
        url,
        id_imovel,
      ],
    );
    return images;
  }

  async update(
    id,
    index,
    url,
    id_imovel,
  ) {
    const images = await db.query(
      `UPDATE images
        SET
          index = $1,
          url = $2,
          id_imovel = $3
        WHERE id = $4
        RETURNING *`,
      [index,
        url,
        id_imovel,
        id],
    );
    return images;
  }

  async delete(id) {
    const response = await db.query('DELETE FROM images WHERE id_imovel = $1', [id]);
    return response;
  }
}

module.exports = new ImageRepository();
