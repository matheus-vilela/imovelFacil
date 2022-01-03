const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5431,
  user: 'root',
  password: 'root',
  database: 'imovelfacil',
});

client.connect();

exports.query = async (query, values) => {
  const result = await client.query(query, values);
  return result.rows;
};
