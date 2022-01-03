const { Router } = require('express');

const ImovelController = require('./app/controllers/imovel-controller');
const ClienteController = require('./app/controllers/cliente-controller');
const ContratoController = require('./app/controllers/contrato-controller');
const FiadorController = require('./app/controllers/fiador-controller');
const EnderecoController = require('./app/controllers/endereco-controller');

const router = Router();

router.get('/imovel', ImovelController.index);
router.post('/imovel', ImovelController.store);
router.get('/imovel/:id', ImovelController.show);
router.put('/imovel/:id', ImovelController.update);
router.delete('/imovel/:id', ImovelController.delete);

router.get('/cliente', ClienteController.index);
router.post('/cliente', ClienteController.store);
router.get('/cliente/:id', ClienteController.show);
router.put('/cliente/:id', ClienteController.update);
router.delete('/cliente/:id', ClienteController.delete);

router.get('/contrato', ContratoController.index);
router.post('/contrato', ContratoController.store);
router.get('/contrato/:id', ContratoController.show);
router.put('/contrato/:id', ContratoController.update);
router.delete('/contrato/:id', ContratoController.delete);

router.get('/fiador', FiadorController.index);
router.post('/fiador', FiadorController.store);
router.get('/fiador/:id', FiadorController.show);
router.put('/fiador/:id', FiadorController.update);
router.delete('/fiador/:id', FiadorController.delete);

router.get('/endereco', EnderecoController.index);
router.get('/endereco/:id', EnderecoController.show);

module.exports = router;
