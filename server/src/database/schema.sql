CREATE DATABASE imovelfacil;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS imovel (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  tipo VARCHAR(100) NOT NULL,
  objetivo VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS endereco (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  rua VARCHAR NOT NULL,
  numero VARCHAR(10) NOT NULL,
  complemento VARCHAR(100),
  bairro VARCHAR(100) NOT NULL,
  cidade VARCHAR(100) NOT NULL,
  estado VARCHAR(100) NOT NULL,
  cep VARCHAR(9) NOT NULL
);

CREATE TABLE IF NOT EXISTS images (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  id_imovel UUID,
  url VARCHAR NOT NULL,
  FOREIGN KEY(id_imovel) REFERENCES imovel(id)
);

CREATE TABLE IF NOT EXISTS casa (
  id_imovel UUID,
  valor FLOAT NOT NUll,
  area FLOAT NOT NUll,
  endereco UUID,
  descricao VARCHAR(100) NOT NULL,
  quartos INT NOT NUll,
  banheiro INT NOT NUll,
  garagem INT,
  suite INT,
  piscina BOOLEAN,
  FOREIGN KEY(id_imovel) REFERENCES imovel(id),
  FOREIGN KEY(endereco) REFERENCES endereco(id),
  PRIMARY KEY(id_imovel)
);

CREATE TABLE IF NOT EXISTS quitinete (
  id_imovel UUID,
  valor FLOAT NOT NUll,
  area FLOAT NOT NUll,
  endereco UUID,
  descricao VARCHAR(100) NOT NULL,
  garagem INT,
  FOREIGN KEY(id_imovel) REFERENCES imovel(id),
  FOREIGN KEY(endereco) REFERENCES endereco(id),
  PRIMARY KEY (id_imovel)
);

CREATE TABLE IF NOT EXISTS apartamento (
  id_imovel UUID,
  valor FLOAT NOT NUll,
  area FLOAT NOT NUll,
  endereco UUID,
  descricao VARCHAR(100) NOT NULL,
  quartos INT NOT NUll,
  banheiro INT NOT NUll,
  garagem INT,
  suite INT,
  piscina BOOLEAN,
  condominio FLOAT NOT NULL,
  portaria BOOLEAN,
  FOREIGN KEY(id_imovel) REFERENCES imovel(id),
  FOREIGN KEY(endereco) REFERENCES endereco(id),
  PRIMARY KEY(id_imovel)
);

CREATE TABLE IF NOT EXISTS cliente (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  nome VARCHAR(50) NOT NULL,
  telefone VARCHAR(11),
  email VARCHAR(50) NOT NULL,
  endereco UUID,
  FOREIGN KEY(endereco) REFERENCES endereco(id)
);

CREATE TABLE IF NOT EXISTS fiador (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  nome VARCHAR(100) NOT NULL,
  telefone VARCHAR(11),
  email VARCHAR(50) NOT NULL,
  salario FLOAT NOT NULL,
  endereco UUID,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS contrato (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  descricao VARCHAR NOT NULL,
  data VARCHAR(13) NOT NULL,
  id_imovel UUID,
  id_fiador UUID,
  FOREIGN KEY (id_imovel) REFERENCES imovel(id),
  FOREIGN KEY (id_fiador) REFERENCES fiador(id),
  PRIMARY KEY (id)
);


