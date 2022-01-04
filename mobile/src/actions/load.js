import { getListImoveis,getListImages, getEndereco } from '../services';

export async function loadImoveis(){
  const list = await getListImoveis();
  await Promise.all(list.map(async (imovel)=>{
    const listImages = await getListImages(imovel.id);
    const endereco = await getEndereco(imovel.endereco);
    imovel.listImages = listImages;
    imovel.endereco = endereco;
  }))
  return Promise.resolve(list);
}
