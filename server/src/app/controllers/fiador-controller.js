const FiadorRepository = require('../repositories/fiador-repository');

class FiadorController {
  async index(request, response) {
    const { orderBy } = request.query;
    const fiadores = await FiadorRepository.findAll(orderBy);
    return response.json(fiadores);
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await FiadorRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'fiador not found' });
    }
    response.json(contact);
  }

  async store(request, response) {
    const {
      nome, telefone, email, endereco, salario,
    } = request.body;

    const fiadorExists = await FiadorRepository.findByAddress(email);
    if (fiadorExists) {
      return response.status(400).json({ error: 'This email is already in use.' });
    }

    const fiador = await FiadorRepository.create({
      nome, telefone, email, endereco, salario,
    });

    response.json(fiador);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      nome, telefone, email, endereco,
    } = request.body;
    const fiadorExists = await FiadorRepository.findById(id);
    if (!fiadorExists) {
      return response.status(404).json({ error: 'fiador not found' });
    }

    const fiador = await FiadorRepository.update(id, nome, telefone, email, endereco);
    response.json(fiador);
  }

  async delete(request, response) {
    const { id } = request.params;
    const fiadorExists = await FiadorRepository.findById(id);
    if (!fiadorExists) {
      return response.status(404).json({ error: 'fiador not found' });
    }
    await FiadorRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new FiadorController();
