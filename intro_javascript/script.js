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