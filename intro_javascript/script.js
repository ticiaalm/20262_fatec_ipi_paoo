/* Promise */
/* 1 + 2 + 3 + ... + (n-2) + (n-1) + n */
/* const calculoRapidinho = (n) => {
    return n >= 0 ? Promise.resolve((n / 2) * (n + 1)) : Promise.reject("Apenas positivos")
}
calculoRapidinho(10)
.then(res => console.log(`Resultado: ${res}`))
.catch(erro => console.log(`Erro: ${erro}`)) */

/* calculoRapidinho(100).then((res) => {
    console.log(res)
})
console.log('Terminando script principal...') */

/* function calculoDemorado(n) {
    return new Promise(function(resolve, reject) {
        let res = 0
        for (let i = 1; i <= n; i++) {
            res += i
        }
        resolve(res)
    })
}
// Construção then/catch
calculoDemorado(100).then((resultado) => {console.log(resultado)})
const auxiliar = calculoDemorado(100)
auxiliar.then(function(res) {
    console.log(res)
}) */

/* CPU-Bound: Dominada por cálculos e contas (um loop que soma de 1 a 100) */
/* IO-Bound: Dominada por operações de entrada e saída (acesso a arquivos, requisições HTTP...)*/

/* const fs = require('fs') // file system
console.log("A")
// Inferno de callbacks
const abrirArquivo = function(nomeArquivo) {
    Definir uma função callback 
    const exibirConteudo = function(erro, conteudo) {
        if (erro) {
            console.log(`Deu erro: ${erro}`)
        } else {
            console.log(conteudo.toString())
            const dobro = + conteudo.toString() * 2
            const finalizar = function(erro) {
                if (erro) {
                    console.log('Erro ao salvar o dobro')
                } else {
                    console.log('Salvou o dobro')
                }
                console.log("F")
            }
            fs.writeFile('dobro.txt', dobro.toString(), finalizar)
            console.log("E")
        }
        console.log("D")
    }
    // Chamar a função de leitura do arquivo do módulo fs, entregando a callback como parâmetro
    fs.readFile(nomeArquivo, exibirConteudo)
    console.log("C")
}
abrirArquivo("arquivo.txt")
console.log("B") */

/* console.log('Script principal começou...')
setTimeout(() => {
    console.log('Dentro da timeout')
}, 0)
const data = new Data().getTime() + 10000
while(new Date().getTime() <= data);
console.log('Script principal terminou...') */

/* function demorada() {
    const atualMais2Segundos = new Date(0).getTime() + 2000
    while(new Date().getTime() <= atualMais2Segundos);
    const d = 8 + 4
    return d
}
const a = 2 + 3
const b = 5 + 9
// const d = demorada()
setTimeout(() => {
    const d = demorada()
    console.log(`d: ${d}`)
}, 500)
const e = 2 + a + b
console.log(`e: ${e}`) */

/* const a = 2 + 7
const b = 5
console.log(a + b) */

/* console.log('Eu primeiro...')
console.log('Agora eu')
console.log('Sempre serei a última... :(') */

/* Objetos JavaScript */
/* Objeto JSON (JavaScript Object Notation) */

/* Uma calculadora realiza as operações de soma e subtração */
/* const calculadora = {
    somar: function(a, b) {
        return a + b
    },
    subtrair: (a, b) => a - b
}
console.log(calculadora.somar(2, 3))
console.log(calculadora.subtrair(5, 4)) */

/* Uma concessionária que tem CNPJ e endereço.
Endereço tem rua, bairro e número.
A concessionária tem uma coleção de veículos.
Cada veículo tem marca, modelo e ano de fabricação */
/* let concessionaria = {
    cnpj: "00.000.000/0001-91",
    endereco: {
        rua: "A",
        bairro: "Jardim SP",
        numero: 10
    },
    veiculo: [
        {
            marca: "Volkswagen",
            modelo: "Polo",
            ano: 1972
        }
    ]
}
for (let veiculo of concessionaria.veiculo) {
    console.log('Marca: ' + (veiculo.marca));
    console.log('Modelo: ' + (veiculo.modelo));
    console.log('Ano de Fabricação: ' + (veiculo.ano));
} */

/* console.log('CNPJ: '+ concessionaria.cnpj)
console.log('Rua: ' + concessionaria.endereco.rua)
console.log('Bairro: ' + concessionaria.endereco.bairro)
console.log('Número: ' + concessionaria.endereco.numero)
console.log('Marca: ' + concessionaria.veiculo.marca)
console.log('Modelo: ' + concessionaria.veiculo.modelo)
console.log('Ano: ' + concessionaria.veiculo.ano) */

/* Uma pessoa se chama Maria, tem 21 anos e mora na rua B, número 20 */
/* let pessoa = {
    nome: "Maria",
    idade: 21,
    endereco: {
        rua: "B",
        numero: 20
    }
}
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log('Rua: ' + pessoa.endereco.rua)
console.log('Numero: ' + pessoa.endereco.numero) */

/* Uma pessoa se chama João e tem 17 anos */
/* let pessoa = {
    nome: "João", // par chave/valor
    idade: 17
}
console.log(pessoa.nome)
console.log(pessoa['idade'])
console.log(pessoa.idade) */

/* Closure
 function eAgora() {
    let cont = 1
    function f1() {
        console.log(cont++)
    }
    cont++
    function f2() {
        console.log(cont)
    }
    cont++
    return {f1, f2}
}
let res = eAgora()
res.f1()
res.f2() */

/* function saudacoesFactory(saudacao, nome) {
    return function() {
        return saudacao + ", " + nome
    }
}
const olaJoao = saudacoesFactory("Olá", "João")
const tchauJoao = saudacoesFactory("Tchau", "João")
console.log(olaJoao())
console.log(tchauJoao())

function ola() {
    let nome = 'João'
    return function() {
        console.log('Olá, ' + nome)
    }
}
let olaResult = ola()
olaResult() 

function f() {
    let nome = 'João'
    function g() {
        console.log(nome)
    }
    g()
}
f() 

let umaFuncao = function() {
    console.log("Fui armazenada em uma variável")
}
umaFuncao()

function f(funcao) {
    funcao()
}

function g() {
    function outraFuncao() {
        console.log("Fui criada por g")
    }
    return outraFuncao
}

f(function(){
    console.log('Estou sendo passada para f')
})

const gResult = g()
gResult()
g()()
f(g)
f(g()) */

/* Arrow functions
const hello = () => {console.log('Oi')}
hello()
const dobro = (n) => 2 * n
console.log(dobro(2))
const ehPar = n => n % 2 === 0
console.log(ehPar(5))
const echo = n => n
console.log(echo(5)) */

/* Funções regulares
const dobro = function(n) {
    return 2 * n
}
console.log(dobro(2))
const triplo = function(n = 5) {
    return 3 * n
}
console.log(triplo())
console.log(triplo(10)) */

/* function soma(a, b) {
    return a + b
}
const res = soma(2, 3)
console.log(res) */

/* function hello() {
    console.log('Oi')
}
hello()
function hello(nome) {
    console.log('Oi, ' + nome)
}
hello('Ana') */

/* Vetores
const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]

Filter
const apenasComA = nomes.filter((n) => {return n.startsWith("A")})
console.log(apenasComA)

Map
const iniciais = nomes.map((n) => {return n.charAt(0)})
console.log(iniciais)

Reduce
const valores = [1, 2, 3, 4]
const soma = valores.reduce((ac, v) => {return ac + v})
console.log(soma)

Every
const todosComecamComA = nomes.every((n) => {return n.startsWith("A")})
console.log(todosComecamComA) */

/* v1 = []
v1[0] = 3.4
v1[10] = 2
v1[2] = "abc"
v1[102] = 1
console.log(v1.length)

v2 = [2, "abc", true]
console.log(v2)
for (let i = 0; i < v2.length; i++) {
    console.log(v2[i])
} */

/* Comparações == e ===
console.log(1 == 1) // true
console.log(1 == '1') // true
console.log(1 === 1) // true
console.log(1 === '1') // false
console.log(true == 1) // true
console.log(1 == [1]) // true
console.log(null == null) // true
console.log(null == undefined) // true
console.log([] == false) // true
console.log([] == []) // false */

/* Coerção
const n1 = 2
const n2 = '3'

// Coerção implícita
const n3 = n1 + n2
console.log(n3)

// Coerção explícita
const n4 = n1 + Number(n2)
console.log(n4) */

/* Hoist: içamento
let idade = 18
console.log("Oi, " + nome)
if (idade >= 18) {
    let nome = "João"
    console.log("Parabéns, " + nome + ". Você pode dirigir!")
}
console.log("Até mais, " + nome + "!") */

/* var linguagem = "JavaScript"
console.log("Aprendendo " + linguagem)
var linguagem = "Java"
console.log("Aprendendo " + linguagem) */

/* Começando...
Const, let, var */

/* const nome = 'José'
console.log(nome) */

/* let nome = "Ana"
console.log(nome)
nome = "Ana Maria"
console.log(nome) */

/* var nome = "José"
console.log(nome)
nome = "João"
console.log(nome) */

/* a = 2
console.log(typeof(a))
a = "abc"
console.log(typeof(a))
a.falar() */

/* int a = 2;
a = "abc";
a.falar(); */