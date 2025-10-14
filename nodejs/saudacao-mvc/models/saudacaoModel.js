module.exports = {
  gerarMensagemPersonalizada: (nome, idade, genero) => {
    let faixaEtaria;
    let sexo;

    if (idade < 12) {
      faixaEtaria = "criança";
    } else if (idade < 18) {
      faixaEtaria = "adolescente";
    } else if (idade < 60) {
      faixaEtaria = "adulto";
    } else {
      faixaEtaria = "idoso";
    }

    if (genero === "masculino") {
      sexo = "Sr.";
    } else if(genero === "feminino")
      sexo = "Sra.";
    else {
      sexo = "";
    }

    return `Olá, ${sexo} ${nome}! você tem ${idade} e você é um(a) ${faixaEtaria}.`;
  }
};
