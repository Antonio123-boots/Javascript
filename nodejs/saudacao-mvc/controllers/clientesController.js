const clientesModel = require('../models/clientesModel');
module.exports = {

    clientes: (req, res) => {
        res.sendFile('clientes.html', {root: './views'});
    }, 

    entrada: (req, res) => {
    const { senha, email } = req.body;
    const mensagem2 = clientesModel.gerarMensagemPersonalizadaDosClientes(senha, email);
    res.send(`<h1>${mensagem2}</h1>`);
  }
};