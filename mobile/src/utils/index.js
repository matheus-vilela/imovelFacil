export const formatCurrency = (value) => value
  .toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  .replace('R$', 'R$ ');
export const formatToNumber = (value) => value.replace('R$ ', '').replace('.', '').replace(',', '.');
