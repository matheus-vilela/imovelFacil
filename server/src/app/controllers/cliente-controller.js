const ClienteRepository = require('../repositories/cliente-repository');

class ClienteController {
  async index(request, response) {
    const { orderBy } = request.query;
    const clientes = await ClienteRepository.findAll(orderBy);
    return response.json(clientes);
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await ClienteRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'cliente not found' });
    }
    response.json(contact);
  }

  async store(request, response) {
    const {
      nome, telefone, email, endereco,
    } = request.body;

    const clienteExists = await ClienteRepository.findByAddress(email);
    if (clienteExists) {
      return response.status(400).json({ error: 'This email is already in use.' });
    }

    const cliente = await ClienteRepository.create({
      nome, telefone, email, endereco,
    });

    response.json(cliente);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      nome, telefone, email, endereco,
    } = request.body;
    const clienteExists = await ClienteRepository.findById(id);
    if (!clienteExists) {
      return response.status(404).json({ error: 'cliente not found' });
    }

    const cliente = await ClienteRepository.update(id, nome, telefone, email, endereco);
    response.json(cliente);
  }

  async delete(request, response) {
    const { id } = request.params;
    const clienteExists = await ClienteRepository.findById(id);
    if (!clienteExists) {
      return response.status(404).json({ error: 'cliente not found' });
    }
    await ClienteRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new ClienteController();
