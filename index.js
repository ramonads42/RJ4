class Cliente {
    #cpf;
    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.#cpf = cpf;
        this.endereco = endereco;
        this.telefones = new Set();
    }
    get pegarCpf() {
        return this.#cpf;
    }
    get nomeCaixaAlta() {
        return this.nome.toUpperCase();
    }
    get nomeCaixaBaixa() {
        return this.nome.toLowerCase();
    }
    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
    toString() {
        return `(${this.ddd})${this.numero}`;
    }
    get dddMaiusculo() {
        return this.ddd.toUpperCase();
    }
    get dddMinusculo() {
        return this.ddd.toLowerCase();
    }
    get numeroMaiusculo() {
        return this.numero.toUpperCase();
    }
    get numeroMinusculo() {
        return this.numero.toLowerCase();
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }
    toString() {
        return `Estado: ${this.estado}, cidade: ${this.cidade}, rua: ${this.rua}, numero: ${this.numero}`;
    }
    get estadoMaiusculo() {
        return this.estado.toUpperCase();
    }
    get estadoMinusculo() {
        return this.estado.toLowerCase();
    }
    get cidadeMaiusculo() {
        return this.cidade.toUpperCase();
    }
    get cidadeMinusculo() {
        return this.cidade.toLowerCase();
    }
    get ruaMaiusculo() {
        return this.rua.toUpperCase();
    }
    get ruaMinusculo() {
        return this.rua.toLowerCase();
    }get numeroMaiusculo() {
        return this.numero.toUpperCase();
    }
    get numeroMinusculo() {
        return this.numero.toLowerCase();
    }
}

class Empresa {
    #cnpj;
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj;
        this.endereco = endereco;
        this.clientes = new Set();
        this.telefones = new Set();
    }
    get razaoSocialMaiusculo() {
        return this.razaoSocial.toUpperCase();
    }
    get razaoSocialMinusculo() {
        return this.razaoSocial.toLowerCase();
    }
    get nomeFantasiaMaiusculo() {
        return this.nomeFantasia.toUpperCase();
    }
    get nomeFantasiaMinusculo() {
        return this.nomeFantasia.toLowerCase();
    }
    get enderecoMaiusculo() {
        return this.endereco.toUpperCase();
    }
    get enderecoMinusculo() {
        return this.endereco.toLowerCase();
    }

    get pegarCnpj(){
        return this.#cnpj
    }

    adicionarCliente(cliente) {
        this.clientes.add(cliente);
    }

get cliente(){
    return Array.from(this.clientes).map(cliente => 
`Nome: ${cliente.nome} 
CPF: ${cliente.pegarCpf}
Endereco: ${cliente.endereco}
Telefones: 
${Array.from(cliente.telefones).map(tel => tel.toString()).join('\n')}
`).join('\n');
}

get telefonesFormat() {
    return Array.from(this.telefones).map(t => t.toString());
    }

    detalhe(){
        return `Razão social: ${this.razaoSocial} 
Nome fantasia: ${this.nomeFantasia}
Telefone: ${this.telefonesFormat}
Endereco: ${this.endereco}
Cnpj: ${this.#cnpj}
----------------------------------- 
${this.cliente}`
    }
}

export { Cliente, Telefone, Endereco, Empresa };
