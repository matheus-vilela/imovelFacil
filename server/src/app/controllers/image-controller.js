const ImageRepository = require('../repositories/image-repository');

class ImageController {
  async index(request, response) {
    const { orderBy } = request.query;
    const images = await ImageRepository.findAll(orderBy);
    return response.json(images);
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await ImageRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'image not found' });
    }
    response.json(contact);
  }

  async store(request, response) {
    const {
      index = 0,
      url,
      id_imovel,
    } = request.body;

    const image = await ImageRepository.create({
      index,
      url,
      id_imovel,
    });

    response.json(image);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      index = 0,
      url,
      id_imovel,
    } = request.body;
    const imageExists = await ImageRepository.findById(id);
    if (!imageExists) {
      return response.status(404).json({ error: 'image not found' });
    }
    const image = await ImageRepository.update(
      id,
      index,
      url,
      id_imovel,
    );
    response.json(image);
  }

  async delete(request, response) {
    const { id } = request.params;
    const imageExists = await ImageRepository.findById(id);
    if (!imageExists) {
      return response.status(404).json({ error: 'image not found' });
    }
    await ImageRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new ImageController();
