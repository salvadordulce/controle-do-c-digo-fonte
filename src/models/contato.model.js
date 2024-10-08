let contato = [];

// Função que retorna todos os contatos
function listarContatos() {
    return contato;
};

// Função que cria um novo contato
function criarContato(nome, telefone) {
    const novocontato = { id: contato.length + 1, nome, telefone };
    contato.push(novocontato);

    return novocontato;
};


module.exports = {
    listarContatos,
    criarContato
}
