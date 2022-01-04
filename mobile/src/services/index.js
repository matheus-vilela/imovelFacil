import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3000',
  timeout: 30000,
});

export const getListImoveis = async () => {
  const { data } = await api.get('/imovel');
  return data.length > 0 ? data : [];
};

export const getListImages = async (id) => {
  const { data } = await api.get(`/image/${id}`);
  return data.length > 0 ? data : [];
};

export const getEndereco = async (id) => {
  const { data } = await api.get(`/endereco/${id}`);
  return data;
};

export const postImovel = async (body) => {
  const data = await api.post('/imovel', body);
  return data;
};

export const postCliente = async (body) => {
  const data = await api.post('/cliente', body);
  return data;
};

export const postFiador = async (body) => {
  const data = await api.post('/fiador', body);
  return data;
};

export const deleteIMovel = async (id) => {
  const data = await api.delete(`/imovel/${id}`, id);
  return data;
};
