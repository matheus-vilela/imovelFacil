const ContratoRepository = require('../repositories/contrato-repository');

class ContratoController {
  async index(request, response) {
    const { orderBy } = request.query;
    const contratos = await ContratoRepository.findAll(orderBy);
    return response.json(contratos);
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await ContratoRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'contrato not found' });
    }
    response.json(contact);
  }

  async store(request, response) {
    const { id } = request.params;

    const {
      descricao,
      data,
      id_imovel,
      id_fiador = null,
    } = request.body;

    const contratoExists = await ContratoRepository.findById(id);
    if (contratoExists) {
      return response.status(400).json({ error: 'This email is already in use.' });
    }

    const contrato = await ContratoRepository.create({
      descricao,
      data,
      id_imovel,
      id_fiador,
    });

    response.json(contrato);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      descricao,
      data,
      id_imovel,
      id_fiador = null,
    } = request.body;
    const contratoExists = await ContratoRepository.findById(id);
    if (!contratoExists) {
      return response.status(404).json({ error: 'contrato not found' });
    }
    const contrato = await ContratoRepository.update(
      id,
      descricao,
      data,
      id_imovel,
      id_fiador,
    );
    response.json(contrato);
  }

  async delete(request, response) {
    const { id } = request.params;
    const contratoExists = await ContratoRepository.findById(id);
    if (!contratoExists) {
      return response.status(404).json({ error: 'contrato not found' });
    }
    await ContratoRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new ContratoController();
