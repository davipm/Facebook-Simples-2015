/*var nomes = ['bacaxi', 'maça', 'uva'];
for(var i = 0; i < nomes.length; i++){
  console.log(nomes[i]);
}

var nomes = ['maria', 'jose', 'jão'];
nomes.forEach(function (nomes) { 
  console.log(nomes);
});

var nome = ['maria', 'jose', 'jão'];
function imprimirNome(nome1) {
    console.log(nome1);
}
nome.forEach(imprimirNome);

var canais = ['globo', 'sbt', 'record'];
canais.forEach(function (canal) {
    canais.push("RedeTV"); // este item será ignorado
    console.log(canal);
});
console.log(canais);

var numeros1 = [1,2,3];
var dobro1 = [];
for(var i = 0; i < numeros1.length; i++){
    dobro1.push(numeros1[i] * 2);
}
console.log(numeros1);
console.log(dobro1);

var numeros2 = [1,2,3];
var dobro2 = numeros2.map(function (numero) {
    return numero * 2;
});
console.log(numeros2);
console.log(dobro2);

var alunos = [
    {nome: 'jão', idade: 15},
    {nome: 'josé', idade: 18},
    {nome: 'maria', idade: 20}
];
var alunosDeMaior = [];
for(var i = 0; i < alunos.length; i++){
    if(alunos[i].idade >= 18){
        alunosDeMaior.push(alunos[i]);
    }
}
console.log(alunosDeMaior);

var alunos2 = [
    {nome: 'joão', idade: 15},
    {nome: 'josé', idade: 18},
    {nome: 'maria', idade: 20}
];
var alunosDemaior2 = alunos2.filter(function (aluno) {
    return aluno.idade >= 18;
});
console.log(alunosDemaior2);
    */
/*
var alunos = [
    {nome: 'joão'},
    {nome: 'josé'},
    {nome: 'maria'}
];
var aluno;
for(var i = 0; i < alunos.length; i++){
    if(alunos[i].nome === 'josé'){
        aluno = alunos[i];
        break;
    }
}
console.log(aluno);


var alunos = [
    {nome: 'joão'},
    {nome: 'jose'},
    {nome: 'maria'}
];
var aluno = alunos.find(function (aluno) {
    return aluno.nome === 'jose';
});
console.log(aluno);


let alunos = [
    {nome: 'joão', idade: 18},
    {nome: 'maria', idade: 20},
    {nome: 'pedro', idade: 24}
];
let todosAlunosDeMaior = true;
for(let i = 0; i < alunos.length; i++){
    if(alunos[i].idade < 18){
        todosAlunosDeMaior = false;
        break;
    }
}
console.log(todosAlunosDeMaior);


var alunos = [
    {nome: 'joão',  idade: 19},
    {nome: 'maria', idade: 20},
    {nome: 'pedro', idade: 24}
];
var todosAlunosDeMaior = alunos.every(function (aluno) {
    return aluno.idade > 18;
});
console.log(todosAlunosDeMaior);


var pesoDasMalas = [12,32,21,29];
var temMalaAcimaDoPeso = false;
for(var i = 0; i < pesoDasMalas.length; i++){
    if(pesoDasMalas[i] > 30){
        temMalaAcimaDoPeso = true;
    }
}
console.log(temMalaAcimaDoPeso);



var pesoDasMalas = [12,32,21,29];
var temMalaAcimaDoPeso = pesoDasMalas.some(function (pesoDaMala) {
    return pesoDaMala > 30;
});
console.log(temMalaAcimaDoPeso);

var numeros = [ 1,2,3,4,5];
var soma = 0;
for(var i = 0; i < numeros.length; i++){
    soma += numeros[i];
}
console.log(soma);


var numeros = [1,2,3,4,5];
var soma = 0;
soma = numeros.reduce(function (soma, numero) {
    return soma + numero;
}, 0);
console.log(soma);


var alunos = [
    {nome: 'joão',   idade: 10},
    {nome: 'josé',   idade: 10},
    {nome: 'marcos', idade: 10}
];
var nomes = alunos.reduce(function (arrayNomes, aluno) {
    arrayNomes.push(aluno.nome);
    return arrayNomes;
},[]);
console.log(nomes);


var bruxos = ['Rakel Moreira', 'Celia Maria', 'Rony Wesley'];
var interadorBruxos = bruxos[Symbol.iterator]();

console.log(interadorBruxos.next());
console.log(interadorBruxos.next());
console.log(interadorBruxos.next());

console.log(interadorBruxos.next());


var iterador = bruxos[Symbol.iterator]();
var done = false;
var proximo = iterador.next();
do{
    var bruxo = proximo.value;
    chapeuSeletor.fazerSelecaoDaCasa(bruxo);
    proximo = iterador.next();
} while (!proximo.done);


var numeros = [1,2,3,4,5];
for(var numero of numeros){
    console.log(numero);
}

var perfilDoFacebook = {
    nome: 'Carlos',
    idade: 22
}
for(var popriedade in perfilDoFacebook){
    var info = perfilDoFacebook[popriedade];
    console.log(info);
}

var numeros = [1,2,3,4,5];
for(var numero of numeros){
    if(numero > 3){
        break;
    }
    console.log(numero);
}

var numeros = [1,2,3,4,5];
for(var numero of numeros){
    if(numero === 2){
        continue;
    }
    console.log(numero);
}

var map = new Map();
function funcao() {};
var objeto = {};

map.set("String", "sou uma String");
map.set(objeto, "Sou um Objeto");
map.set(funcao, "Sou uma Função");

console.log(map.get("String"));
console.log(map.get(objeto));
console.log(map.get(funcao));

console.log(map.size);

console.log(map.has("String")); // true
console.log(map.has("abc")); // false

map.delete("String");
console.log(map.has("String")); // false

map.clear(); // limpou todos
console.log("Tamanho " + map.size); // tamanho 0
*/
/*
 var mapa = new Map();
 mapa.set('um' ,1);
 mapa.set('dois', 2);
 mapa.set('três', 3);

 for(var chave of mapa.keys()){
 console.log(chave);
 }

 for(var valor of mapa.values()){
 console.log(valor);
 }

 for(var entrada of mapa.entries()){
 console.log(entrada);
 }

 var weakMap = new WeakMap();
 var element1 = window;
 var element2 = document.querySelector('body');

 weakMap.set(element1, 'sou o elemnto 1');
 weakMap.set(element2, 'sou o elemnto 2');

 console.log(weakMap.get(element1));
 console.log(weakMap.get(element2));

 element2.parentNode.removeChild(element2);
 element2 = null; // remove referência local
 console.log(weakMap.get(element2));
 */
/*
var weekMap = new WeakMap();
function funcao() {};
var objeto = {};

weekMap.set("string", "isso é uma string");

weekMap.set(funcao, "isso é uma função");
weekMap.set(objeto, "isso é um objeto");
*/
/*function Pessoa(nome) {
    this._nome = nome;
}
Pessoa.prototype.getNome = function(){
    return this._nome;
};

var roberto = new Pessoa('Roberto');
console.log(roberto.getNome()); // Roberto
console.log(roberto._nome); // Roberto */
/*
var Pessoa = (function () { 
    var dadosPrivados = new WeakMap();

    function Pessoa(nome) {
        dadosPrivados.set(this,{nome: nome});
    }

    Pessoa.prototype.getNome = function () { 
        return dadosPrivados.get(this).nome;
     };

     return Pessoa;
 }());

 var rafael = new Pessoa('Rafael');
 console.log(rafael.getNome()); // Rafael
 console.log(rafael.nome); // undefined

 var estantes = new Map();
 for(var livro of livros){
     estantes.set(livro.getTitulo(), livro.getEstante());
 }

function getLocalizacaoDoLivro(tituloDoLivro) {
    var estante = estantes.get(tituloDoLivro);
    if(estante === undefined){
        return 'Livro não encontrado';
    }
    return estantes.get(tituloDoLivro);
}
*/
/*
function Set() {
  var array = [];
  this.add = function (valor) { 
    if(array.indexOf(valor) === -1){
      array.push(valor);
    }
   },
   this.mostraValores = function () { 
     console.log(array);
    }
}
*/
/*
var set = new Set();
set.add(2);
set.add(1);
set.add(2);

// set.mostraValores(); // [2,1]
for(const valor of set){
  console.log(valor); // 2, 1
}

var set = new Set([2,1,2]);
for(const valor of set){
  console.log(valor); // 2, 1
}
*/
/*
var musicas = new Set(['musica1', 'musica2', 'musica3']);
//musicas.delete('musica1');
musicas.clear(); // apaga tudo

for(var musica of musicas){
  console.log(musica); // musica1 || somente musica2 agora
}
*/
/*
var musicas = new Set(['musica1', 'musica2', 'musica3']);

if(musicas.has('musica1')){
  console.log('Já está na lista');
}

var quant = musicas.size;
console.log("Há " + quant + " músicas na lista.");

var musica1 = {
  titulo: 'O amor não tem rollback',
  autor: 'SQL'
}

var musicas = new WeakSet([musica1]);
console.log(musicas);


var musicas = new Set([musica1]);
console.log(musicas);
musica1 = null;
console.log(musicas);
*/
/*
const pessoa = {nome: 'joão'};
pessoa.idade = 12;

console.log(pessoa);

var mensagem = 'olá';
{
  var mensagem = 'adeus';
}
console.log(mensagem);

var menssage = 'olá';
function menssageAdeus() { 
  var menssage = 'adeus';
 }
 console.log(menssage);

 const arrayVar = [];
 for(var i = 1; i < 5; i++){
   arrayVar.push(function () { 
     console.log(i);
    });
 }

i = 10; // atribui um novo valor ao arrayVar

 const arrayLet = [];
 for(let i = 1; i < 5; i++){
   arrayLet.push(function () { 
     console.log(i);
    });
 }

arrayVar.forEach(function (funcao) { 
  funcao();
});

arrayLet.forEach(function (funcao) { 
  funcao();
 });
 */
/*
 function imprimirNome(nome) {
 console.log(nome);
 }

 imprimirNome('batata');

 const login = 'ecmascript';
 const dia = '13 de setembro';
 const ano = 2016;

 const mensage = "Olá, " + login + "!\nHoje é: " + dia + " de " + ano;
 console.log(mensage);
 /*
 var nome = 'Diego';
 console.log('Bem vindo ' +  nome);
 */
/*
 const nome = 'Diego';
 console.log(`bem-vindo, ${nome}`);

 const n1 = 1, n2 = 2;
 console.log(`${n1} + ${n2} = ${n1 + n2}`);

 const horas = new Date().getHours();
 const mensagem = defineMensagem`${""} ${horas} horas`;
 console.log(mensagem);

 function defineMensagem(string, ...values) {
 const hora = values[1];
 if(hora >= 6 && hora <= 12){
 values[0] = "Bom Dia";
 }
 else if(hora > 12 && hora <= 18){
 values[0] = "Boa Tarde";
 }
 else {
 values[0] = "Boa Noite";
 }

 values[0] = `${values[0]}, são `;
 return `${values[0]}${string[0]}${hora}${string[2]}`
 }

 var boasVindas = function (nome) {
 return "Seja Bem-Vindo " + nome;
 };
 console.log(boasVindas("Davi"));

 const boasvindas = nome => `Seja Bem-Vindo, ${nome}`;
 console.log(boasvindas("Edu"));

 var objeto = {
 meuContexto: function () {
 console.log(this);
 }
 };
 objeto.meuContexto();
 */
/*
 const equipe = {
 nome: 'Guerreiros Z',
 membros: ['Goku', 'Kuririn', 'Vegeta'],
 /*
 membroDaEquipe: function () {
 const that = this;
 this.membros.forEach(function (membro) {
 console.log(`${membro} é da equipe ${that.nome}`);
 })
 }
 */
/*
 membroDaEquipe: function () {
 this.membros.forEach(membro => {
 console.log(`${membro} é da equipe ${this.nome}`);
 })
 }
 */
/*
 membroDaEquipe: function () {
 this.membros.forEach(function (membro) {
 console.log(`${membro} é da equipe ${this.nome}`);
 }.bind(this));
 }
 };
 equipe.membroDaEquipe();
 */
/*
 function Livro(titulo) {
 this.titulo = titulo;
 }
 var livro = new Livro('entendendo ES6');
 console.log(livro.titulo); // entendendo ES6

 var livro = {
 titulo: 'Anjos e demonios'
 };
 console.log(livro.titulo); // anjos e demonios

 var outroLivro = livro;
 livro.titulo = 'O codigo da vinci';

 console.log(outroLivro.titulo); // O codigo da vinci
 console.log(livro.titulo); // O codigo da vinci

 var livro = {
 titulo: 'Anjos e demonios'
 };

 livro.autor = 'Dan Brown';
 livro['mostrarLivro'] = function () {
 console.log(this.titulo + ', ' + this.autor);
 };

 livro.mostrarLivro(); // Anjos e demonios, Dan Brown
 */
/*
 var nome = 'maria';
 var sobrenome = 'madalena';

 var pessoa = {
 nome: nome,
 sobrenome: sobrenome
 }
 */
/*
 const nome = 'Maria';
 const sobrenome = 'Madalena';
 /*
 const seApresentar = function () {
 console.log(`Olá! Sou a ${this.nome} ${this.sobrenome}`);
 };

 const pessoa = {nome, sobrenome, seApresentar};
 pessoa.seApresentar();
 */
/*
 const pessoa = {
 nome,
 sobrenome,
 seApresentar(){
 console.log(`Olá! sou a ${this.nome} ${this.sobrenome}`);
 }
 };
 pessoa.seApresentar();

 const nomeMetodo = 'invocar';
 const objeto = {
 [nomeMetodo](){
 console.log('executou método');
 }
 };
 objeto[nomeMetodo](); // executou o metodo
 */
/*
 const nomeFuncao = 'mostrar';
 const propriedade = 'Nome';

 const objeto = {
 Nome: 'Objeto',
 [`${nomeFuncao}${propriedade}`](){
 console.log(this[propriedade]);
 }
 };
 objeto.mostrarNome();

 const apelido = "apelido";
 const pessoa ={
 nome: 'José',
 [apelido]: 'Zé'
 };
 console.log(pessoa[apelido]);
 */
/*
 function obterDadoDaTela() {
 const nome = document.getElementById('nome').value;
 const idade = document.getElementById('idade').value;
 const sexo = document.getElementById('swxo').value;
 const convento = document.getElementById('convenio').value;

 return {nome, idade, sexo, convento};
 }

 const url = 'https://sistemasaude.com.br/api/cadastro/paciente';
 const dados = obterDadoDaTela();

 const dadosJason = JSON.stringify(dados);

 $.ajax({
 url: url,
 dataType: 'json',
 contentType: 'application/json; charset=UTF-8',
 data: dadosJason,
 type: 'POST',
 complete: callback
 });
 */
/*
function minhaMaeMandouEuEscolherEsseAqui(qualEuEscolho) {
  console.log(qualEuEscolho);
}
minhaMaeMandouEuEscolherEsseAqui('terceiro');
minhaMaeMandouEuEscolherEsseAqui();

function imprimirNomeCompleto(nome, sobrenome, nomeDoMeio) {
  if(nomeDoMeio === undefined){
      console.log(`${nome} ${sobrenome}`);
  }
  else  {  
      console.log(`${nome} ${sobrenome} ${nomeDoMeio}`);
  }
}

imprimirNomeCompleto('jorge', 'reis');
imprimirNomeCompleto('isabela', 'joana luiza', 'jesus');
*/

/*
function imprimirNomeCompleto(nome, sobrenome, nomeDoMeio = "") {
  console.log(`${nome} ${sobrenome} ${nomeDoMeio}`);
}

imprimirNomeCompleto('João', 'da Silvia', 'Aparecido');
imprimirNomeCompleto('João', 'da Silvia');

function multiplicaPor(valor, multiplicador = 2) {
  return valor * multiplicador;
}

const valor = multiplicaPor(2,2);
console.log(valor);

const valor2 = multiplicaPor(2, undefined);
console.log(valor2);

function print(valor = '') {
  console.log(valor);
}
print();
print(null);
*/
/*
function calcularPotencial(x = 2, y = x) {
  console.log(Math.pow(x, y));
}
calcularPotencial();
calcularPotencial(2);
calcularPotencial(2,2);

const v = 'valor 1';
function funcao(x = v) {
  const v = 'valor 2';
  console.log(x)
}
funcao();
*/
/*
function facaAlgoComMeuNome(nome, callback = z =>{
  console.log(z);
}) {
  callback(nome);
}
facaAlgoComMeuNome('Muriel'); // muriel

function parametroObrigatorio(parametro) {
  throw new Error(`O Parametro "${parametro}" é obrigatorio`);
}

function inserirNaTela(objeto = parametroObrigatorio('objeto')) {
  // logica de implementação do método
}
inserirNaTela();
*/
/*
 // função para montar a tabela
 function montarQuerySelect() {
 const tabela = arguments[0];
 const qtdArgs = arguments.length;
 let cols = '';

 if(qtdArgs > 1){
 for(let index = 1; index < qtdArgs; index++){
 cols += `${arguments[index]}, `;
 }
 cols = cols.substring(0, cols.length - 2);
 }
 else{
 cols = '*';
 }
 return `SELECT ${cols} FROM ${tabela}`;
 }
 // monta a tabela
 const query1 = montarQuerySelect('tabela');
 const query2 = montarQuerySelect('tabela2', 'col1');
 const query3 = montarQuerySelect('tabela3', 'col1', 'col2');

 console.log(query1);
 console.log(query2);
 console.log(query3);
 // fim da montagem da tabela

 function logarTodosArgumentos() {
 for(let i = 0; i < arguments.length; i++){
 console.log(arguments[i]);
 }
 }
 logarTodosArgumentos(1,2,3);
 */
/*
 function somar() {
 let soma = 0;
 const qtd = arguments.length;
 for(let i = 0; i < qtd; i++){
 soma += arguments[i];
 }
 return soma;
 }
 console.log(somar(1,2)); // 3
 console.log(somar(1,2,3)); // 6
 console.log(somar(1,2,3,4)); // 10
 */
/*
 function somar(...valores) {
 /*
 let soma = 0;
 const qtd = valores.length;
 for(let i = 0; i < qtd; i++){
 soma += valores[i];
 }
 return soma;
 */
/*
 return valores.reduce((soma, valor) => {
 return soma + valor;
 }, 0);
 }
 console.log(somar(1,2));
 console.log(somar(1,2,3));
 console.log(somar(1,2,3,4));


 function somaTudoEMultiplicaPor(multiplicador, ...valores) {
 return valores.reduce((soma, valor) => {
 return soma + (valor * multiplicador);
 }, 0);
 }
 console.log(somaTudoEMultiplicaPor(2,1,2)); // 6
 console.log(somaTudoEMultiplicaPor(2,6,7)); // 26
 */
/*
function montaQuerySelect(tabela, ...cols) {
    let colsQuery = '';
    if(cols.length > 0){
        colsQuery = cols.reduce((colsQuery, coluna) => {
            return colsQuery += `${coluna}, `;
        }, '');
        colsQuery = colsQuery.substring(0, colsQuery.length -2);
    }
    else {
        colsQuery = '*';
    }
    return `SELECT ${colsQuery} FROM ${tabela}`;
}
const query1 = montaQuerySelect('tabela');
const query2 = montaQuerySelect('tabela', 'col1');
const query3 = montaQuerySelect('tabela', 'col1', 'col2');

console.log(query1); // SELECT * FROM tabela
console.log(query2); // SELECT col1 FROM tabela
console.log(query3); // SELECT col1, col2 FROM tabela
*/
/*
console.log(1); // 1
console.log({}); // objeto {}
console.log(1,2,3); // 1 2 3

var arguments = [1,2,3];

console.log(...arguments);

console.log.apply(console, arguments);

console.log(arguments[0], arguments[1], arguments[2]);

const listaMae = ['leite', 'ovos', 'papel'];
const listaNamorada = ['arroz', 'feijão', 'suco'];
const listaEscritorio = ['adesivos', 'canetas', 'fita adesiva'];

//const listaCompras = listaMae.concat(listaNamorada, listaEscritorio);
const listaCompras = [...listaMae, ...listaNamorada, ...listaEscritorio];
console.log(listaCompras); // ['leite', 'ovos' ...]
console.log(listaCompras.length); // 6

const produtoSelecionado = {
  descricao: 'Blusa de lã',
  preco: 'R$ 59,90'
};

const carrinho = [
  {descricao: 'Bota de cano Médio', preco: 'R$ 199,90'},
  {descricao: 'Saia corrida', preco: 'R$ 29,90'},
  {descricao: 'Vestido longo', preco: 'R$ 399,90'},
];

const carrinhoAtualizado = [...carrinho, produtoSelecionado];

for(let produto of carrinhoAtualizado){
  console.log(produto.descricao);
}
// saída:
// Botão de cano Médio
// Saia Colorida
// Vestido Longo
// Blusa de lã

function soma(a,b) {
  console.log(a + b);
}
soma(1,2);

function soma(a,b) {
  console.log(a + b);
}
var numeros = [1,2];
soma(...numeros);
*/
/*
function palavrasNaAcentuadas(palavra) {
  let atdVogais = 0;
  const palavraLowerCase = palavra.toLowerCase();
  const letras = [...palavraLowerCase];
  for(let letra of letras){
    if("aeiou".indexOf(letra) !== -1){
      atdVogais++;
    }
  }

  return atdVogais;

}

console.log(palavrasNaAcentuadas('emascript'));
console.log(palavrasNaAcentuadas('javascript'));
console.log(palavrasNaAcentuadas('SWIFT'));
console.log(palavrasNaAcentuadas('JAva'));
*/
/*
function contaQuantidadeVogaisNaoAcentuadas(...palavras) {
  let qtdVogais = 0;
  for(let palavra of palavras){
    let palavraLowerCase = palavra.toLowerCase();
    const letras = [...palavraLowerCase];
    for(let letra of letras){
      if("aeiou".indexOf(letra) !== -1){
        qtdVogais++;
      }
    }
  }
  return qtdVogais;
}
console.log(contaQuantidadeVogaisNaoAcentuadas('es6'));
console.log(contaQuantidadeVogaisNaoAcentuadas('java', 'javascript', 'delphi'));
console.log(contaQuantidadeVogaisNaoAcentuadas('NãO ConSideRa AcentUADoS'));

const Usuario = {
  nome: 'Elliot',
  sobrenome: 'Alderson',
  senha: 'mrrobot',
  email: 'elliot.alderson@gmail.com',
  profissao: 'Engenheiro de Cibersegurança',
  github: 'https://github.com/ElliotAlderson'
};
/*
const email = Usuario.email;
validarEmail(email);
*/
/*
const {email} = Usuario;
console.log(email);

const {senha, confirmacaoSenha} = Usuario;
console.log(senha);
console.log(confirmacaoSenha);

const {numeroDoCartão} = Usuario;
console.log(numeroDoCartão);
*/
/*
const Pessoa = {
  sobrenome: 'Alberto'
};

const {sobrenome:apelido} = Pessoa;
console.log(sobrenome);
console.log(apelido);
*/
/*
const suco = {
  sabor: 'uva',
  quantidade: '500ml'
}

const doce = {
  tipo: 'açucar'
}

function descreverSuco({sabor, quantidade}, {tipo}) {
  return `Este suco é de sabor ${sabor} e possui ${quantidade} adocicado com ${tipo}`;
}
console.log(descreverSuco(suco, doce));

function recuperaDadosDaAPI() {
  return Response.json;
}

const {temperatura, maxima, minima} = recuperaDadosDaAPI();
console.log(temperatura);
console.log(maxima);
console.log(minima);
*/
/*
const cores = ['azul', 'cinza', 'branco', 'preto'];
console.log(cores[0]); // azul 
console.log(cores[3]); // preto

const [cor1,,,cor2] = ['azul', 'cinza', 'branco', 'preto'];
console.log(cor1); // azul
console.log(cor2); // preto
*/
/*
const [cor1,,,cor2, cor3] = ['azul', 'cinza', 'branco', 'preto'];
console.log(cor1); // axul
console.log(cor2); // preto
console.log(cor3); // undefined

const contatos = [
  {
    nome: 'Alex Júnior',
    numero: '1234-5678'
  },
  {
    nome: 'Carolina Moya',
    numero: '1234-6789'
  },
  {
    nome: 'Fernando Jorge',
    numero: '1234-5567'
  }
];

const [,Carol] = contatos;

function mostraNumero({numero}) {
  console.log(numero);
}
mostraNumero(Carol);

function mostraNumeroDaCarol([,{numero}]) {
  console.log(numero);
}
mostraNumeroDaCarol(contatos);

const rotas = {
  rapidas: ['Rodovia', 'Estrada X', 'Estrada X']
};

const {rapidas:[rapida]} = rotas;
console.log(rapida); // Rodovia
*/
/*
function Carro(modelo, chassi, qtdPortas) {
  this.modelo = modelo;
  this.chassi = chassi;
  this.qtdPortas = qtdPortas;
}
/*
const prototipo = new Carro('protótipo', '1290381209', 2);
console.log(prototipo.modelo);
console.log(prototipo.chassi);
console.log(prototipo.qtdPortas);
*/
/*
function Carro(modelo) {
  this.modelo = modelo;
}

Carro.prototype.andar = function () { 
  console.log("vrum vrum");
 }
//const prototipo = new Carro('protótipo', '1290381209', 2); 
prototipo.andar();

//const sonix = new Carro('Sonix', '9120219', 4);
console.log(sonix.modelo);
sonix.andar();

function Sonix(modelo, chassi, qtdPortas) {
  Carro.call(this, modelo, chassi, qtdPortas);
}
Sonix.prototype = Object.create(Carro.prototype);
Sonix.prototype.constructor = Sonix;

const sonix = new Sonix('Sonix', '9120219', 4);
console.log(sonata.modelo);
sonata.andar();

Sonix.prototype.abrirTetoSolar = function () { 
  console.log('abrindo teto solar');
}
sonix.abrirTetoSolar();
*/
/*
class Carro{
  constructor(modelo, chassi, qtdPortas){
    this.modelo = modelo;
    this.chassi = chassi;
    this.qtdPortas = qtdPortas;
  }
  andar(){
    console.log("Vrum Vrum");
  }
}
/*
const basico = new Carro('Basico', '123123', 2);
console.log(basico.modelo);
console.log(basico.chassi);
console.log(basico.qtdPortas);
basico.andar();

class Sonix extends Carro {
  constructor(modelo, chassi, qtdPortas){
    super(modelo, chassi, qtdPortas);
  }

  abrirTetoSolar(){
    console.log('abrir teto solar');
  }
}

const sonix = new Sonix('Sonix', '9120219', 4);
sonix.abrirTetoSolar(); // abrindo teto solar 
sonix.andar(); // vrum vrum
console.log(sonix.modelo); // Sonix
*/
// HOISTING EM CLASSES 
/*
const carro = new Carro('sonix');
console.log(carro.modelo);

function Carro(modelo) {
  this.modelo = modelo;
}
*/
/*
const Classes = class Nome {
  getClassName(){
    return Nome.name;
  }
};
const instancia = new Nome();
console.log(instancia.getClassName()); // Nome
console.log(Nome.name); // error Nome is not defined
*/
/*
// 16.5 MÉTODOS ESTÁTICOS
class Casa{
  static abrirPorta(){
    console.log('Abrir porta');
  }
}
Casa.abrirPorta();

// 16.6 ATRIBUTOS PRIVADOS COM WEAKMAP

const propriedades = new WeakMap();

class VideoGame{
  constructor(nome, controles, saida, midia){
    propriedades.set(this,{
      nome, controles, saida, midia
    });
  }
  recuperaPropriedade(propriedade){
    return propriedades.get(this)[propriedade];
  }
}
const caixa360 = new VideoGame('caixa360', 4, 'hdmi', 'dvd');
console.log(caixa360.recuperaPropriedade('nome')); // caixa360
*/

/*
// FUNÇÕES GERADORAS CAP 18
function *pecorrerLinha477() {
  console.log('Passei pela rua 1');
  yield 'Fim da linha';
  console.log('Passei na rua 2');
  yield 'Parada 2';
  console.log('Passei na rua 3');
  yield 'Parada 3';
  console.log('Passei na rua 4');
  yield 'Fim da linha';
}
//pecorrerLinha477(); 

//const linha = pecorrerLinha477();
//linha.next();
//const parada = linha.next();
//console.log(parada);
//let next = linha.next(); console.log(next);
//next = linha.next(); console.log(next);
//next = linha.next(); console.log(next);
//next = linha.next(); console.log(next);
//next = linha.next(); console.log(next);

// 18.2 interações com geradores
const linha = pecorrerLinha477();
// let next = linha.next();
// while(!next.done){
//   console.log(next);
//   next = linha.next();
// }
// console.log(next); // exibe o último
for(let parada of linha){
    console.log(parada);
}

// 18.3 entendendo o symbol.iterator
const obejto = {
    valor: 10,
    [Symbol("simbol")]: 'Oi, sou um simbolo'
};
console.log(obejto.valor); // 10
console.log(obejto.simbolo); // undefined

const primos = [2,3,5];
const iterador = primos[Symbol.iterator]();

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

console.log(iterador.next());

const timeDesenvolvimento = {
    quantidade: 3,
    maturidade: 'alta',
    senior: 'Luís',
    pleno: 'Márcia',
    junior: 'Christian',
    [Symbol.iterator]: function* () {
        yield this.senior;
        yield this.pleno;
        yield this.junior;
    }
};

const timeNegocios = {
    quantidade: 2,
    diretor: 'Marcelo',
    vice: 'Guilherme',
    [Symbol.iterator]: function* () {
        yield this.diretor;
        yield this.vice;
    }
};

const equipe = {
    timeDesenvolvimento,
    timeNegocios,
    [Symbol.iterator]: function* () {
        yield* timeDesenvolvimento;
        yield* timeNegocios;
    }
};

for(let integrante of equipe){
    console.log(integrante);
}

// OPERAÇÕES ASSÍNCRONAS COM PROMISSES

// let promise = new Promise((resolve, reject) => {
//     let resultado = true;
//     if(resultado){
//         resolve("deu tudo certo");
//     }
//     else{
//         reject("deu tudo errado");
//     }
// });
// promise.then((data) => console.log(`resultado positivo: ${data}`));
// promise.catch((data) => console.log(`resultado negativo: ${data}`));

// OPERAÇÕES ASSÍNCRONAS
//
// let promise = new Promise((resolve, reject) => {
//     let resultado = true;
//     let tempo = 2000;
//     setTimeout(()=>{
//         if(resultado){
//             resolve("deu tudo certo");
//         }
//         else{
//             reject("deu tudo errado");
//         }
//     }, tempo);
// });
// //promise.then((data) => console.log(`resultado positivo: ${data}`));
// //promise.catch((data) => console.log(`resultado negativo: ${data}`));
// //console.log("fui executado antes");
//
// // ANINHAMENTO DE THEN E CATCH
// promise
//     .then((data) => {
//         console.log(`resultado positivo: ${data}`)
//         return data;
//     })
//     .then((data) => console.log(`resultado positivo 2: ${data}`))
//     .catch((data) => console.log(`resultado negativo: ${data}`));

let promise = new Promise((resolve, reject) => {
    resolve('ok');
});
promise
    .then((data) => {
        console.log(`sucesso: ${data}`);
        throw new Error("erro");
        return data;
    })
    .then((data) => console.log(`sucesso: ${data}`))
    .catch((data) => console.log(`falha: ${data}`));
*/
/*
 // 20 METAPROGRAMAÇÃO COM PROXIES
 class Usuario {
 constructor(login, senha){
 this.login = login;
 this.senha = senha;
 }
 }

 const usuario = new Usuario('SuperJS', '123');
 console.log(usuario.login);
 console.log(usuario.senha);

 const proxi = new Proxy(usuario, {
 get(alvo, propriedade){
 document.write(`<p>${propriedade} foi solicitada</p>`);
 return alvo[propriedade];
 }
 });
 console.log(proxi.login);
 console.log(proxi.senha);

 const validador = {
 set(alvo, propriedade, valor){
 if(propriedade === 'idade'){
 if(!Number.isInteger(valor)){
 throw new TypeError('A idade não é um número');
 }
 }
 alvo[propriedade] = valor;
 }
 };
 const usuario2 = new Proxy({}, validador);
 usuario2.idade = 10;


 console.log(usuario2.idade);

 const div = `
 <div>
 <p class="blue">Teste</p>
 </div>
 `;

 document.write(div);
 */