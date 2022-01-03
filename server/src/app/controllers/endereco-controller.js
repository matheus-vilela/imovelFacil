const EnderecoRepository = require('../repositories/endereco-repository');

class EnderecoController {
  async index(request, response) {
    const { orderBy } = request.query;
    const enderecos = await EnderecoRepository.findAll(orderBy);
    return response.json(enderecos);
  }

  async show(request, response) {
    const { id } = request.params;
    const address = await EnderecoRepository.findById(id);
    if (!address) {
      return response.status(404).json({ error: 'endereco not found' });
    }
    response.json(address);
  }
}

module.exports = new EnderecoController();
