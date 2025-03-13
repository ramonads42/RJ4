import { Cliente, Telefone, Endereco, Empresa } from 'modulo';


///Criar empresa
const enderecoEmpresa = new Endereco('SP', 'São Paulo', 'Av. Jardins', 635);
const empresa = new Empresa('Merc LTDA','Merc Free','1234567', enderecoEmpresa);

const telefoneEmp1 = new Telefone(12,426387);
const telefoneEmp11 = new Telefone(14,435327);
empresa.telefones.add(telefoneEmp1);
empresa.telefones.add(telefoneEmp11);

///Criar clientes
const enderecoCli1 = new Endereco('SP','São Paulo','São Jao',432);
const cliente1 = new Cliente('Carlos','12345678',enderecoCli1);
const telefoneCli1 = new Telefone(13,123454);
const telefoneCli11 = new Telefone(12,245467);
cliente1.telefones.add(telefoneCli1);
cliente1.telefones.add(telefoneCli11);

const enderecoCli2 = new Endereco('SP','São José dos Campos','Plata',432);
const cliente2 = new Cliente('Roberto','87654309',enderecoCli2);
const telefoneCli2 = new Telefone(12,598227);
const telefoneCli22 = new Telefone(11,369427);
cliente2.telefones.add(telefoneCli2);
cliente2.telefones.add(telefoneCli22);

const enderecoCli3 = new Endereco('SP','São José dos Campos','Meia',987);
const cliente3 = new Cliente('Verma','25437699',enderecoCli3);
const telefoneCli3 = new Telefone(25,234522);
const telefoneCli33 = new Telefone(11,354437);
cliente3.telefones.add(telefoneCli3);
cliente3.telefones.add(telefoneCli33);

const enderecoCli4 = new Endereco('SP','São José dos Campos','Meia',987);
const cliente4 = new Cliente('Roseli','23227765',enderecoCli4);
const telefoneCli4 = new Telefone(25,443218);
const telefoneCli44 = new Telefone(11,876784);
cliente4.telefones.add(telefoneCli4);
cliente4.telefones.add(telefoneCli44);

const enderecoCli5 = new Endereco('SP','Cacapava','Tralha',55);
const cliente5 = new Cliente('Manoel','23227765',enderecoCli5);
const telefoneCli5 = new Telefone(16,234321);
const telefoneCli55 = new Telefone(43,435798);
cliente5.telefones.add(telefoneCli5);
cliente5.telefones.add(telefoneCli55);

empresa.adicionarCliente(cliente1);
empresa.adicionarCliente(cliente2);
empresa.adicionarCliente(cliente3);
empresa.adicionarCliente(cliente4);
empresa.adicionarCliente(cliente5);

console.log(empresa.detalhe())