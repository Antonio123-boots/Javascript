module.exports = {
  gerarMensagemPersonalizadaDosClientes: (email, senha) => {
    let senhaUsuario = 'Usuário';
   
  if (email === '' || senha === '') {
      return 'Erro: Email ou senha não podem estar vazios.';
    }else (email !== '' || senha !== '')
    return `Olá, você está logado com o email: ${email}.`;
  }
};
