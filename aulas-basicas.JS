console.log("salvee fmz?") //para frase coloca dentro da ""

var number1 = 1 //NÃO USE O VAR
let number2 = 2
const number3 = 3 // CONST NÃO MUDA O VALOR 

number1 = 10
number2 = 20

console.log(number1) // para variáveis nao precisa da ""
console.log(number2)
console.log(number3)

/*STRING
*/
let string = `--- STRING ---`  
console.log(string)

let myFirstString = "Escrever entre aspas duplas"
let mySecondString = 'Agora entre aspas simples'
let myThirdString = `Com crase também e com a crase
consigo pular linhas e fazer contas e colocar variáveis`

let numberOfPeopleInClass = 34
let myTextWithSuperPowers = `Tinham exatamente ${numberOfPeopleInClass + 6} pessoas na sala`

console.log(myFirstString)
console.log(mySecondString)
console.log(myTextWithSuperPowers)

let stringfinal = `-----------------------------------------------------------`
console.log(stringfinal)


/*NUMBER
*/
let sobreNumeros = `--- NUMBER ---`
console.log(sobreNumeros)

const numberZero = 29.25
const numberOne = 5
const result = numberZero * numberOne
console.log(result)

let finalNumeros = ` ----------------------------------------------------------- `
console.log(finalNumeros)


/*OBJECT

propriedade: valor
marca: samsumg
cor: preta
tamanho: 75"

nome: Rodolfo
idade: 28
altura: 1.7m

*/
const object = `--- OBJECT ---`
console.log(object)

const person = {
    name: "Rodolfo",
    age: 28,
    sex: "male",
    height: 1.7,
    addres: {
        street: "Vinte e dois de Maio",
        number: 34,
        country: "Brasil"
    }
}
console.log(person)
console.log(person.addres.street)

const finishObject = `-----------------------------------------------------------`
console.log(finishObject)

/* ARRAY
*/
let array = `--- ARRAY ---`
console.log(array)

const numbers = [1, 5, "Uma Frase", 235]
//NOS ARRAYS, COMEÇAMOS PELA POSIÇÃO ZERO (0)
console.log(numbers[1])

const peoples = [{
    name: "Rodolfo",
    age: 28,
    sex: "male",
    height: 1.7,
    addres:{
        street: "Vinte e dois de Maio",
        number: 34,
        country: "Brasil"
    }
},
{
    name: "Arrenius",
    age: 27,
    sex: "male",
    height: 1.72,
    addres:{
    street: "Maria Cunha de Oliveira",
    number: 229,
    country: "Brasil"
    }
},
{
    name: "Euda",
    age: 52,
    sex: "female",
    height: 1.67,
    addres:{
    street: "Maria Cunha de Oliveira",
    number: 229,
    country: "Brasil"
    }
}
]

console.log(peoples)

let finishArray = `-----------------------------------------------------------`
console.log(finishArray)

/*
MATH
*/
const math1 = `--- MATH ---`
console.log(math1)

console.log(Math.PI) // MOSTRA O VALOR DO PI
console.log(Math.pow(2,3)) // PERMITE USARMOS POTENCIAÇÃO 
console.log(Math.sqrt(25,2)) // PERMITE CALCULARMOS A RAIZ QUADRADA DE UM NÚMERO
console.log(Math.random()) // MOSTRA UM NUMERO ALEATÓRIO ENTRE 0 E 1
console.log(Math.ceil(23.6)) // VAI ARRENDONDAR UM NÚMERO PARA "CIMA"
console.log(Math.floor(23.6)) // VAI ARRENDONDAR UM NÚMERO PARA "BAIXO"

const finishMath1 = `-----------------------------------------------------------`
console.log(finishMath1)

/* OPERADORES aritiméticos

+ -> Adição
- -> Subtração
* -> Multiplicação
/ -> Divisão
% -> Resto
++ -> Incremento
-- -> Decremento
** -> Exponencial

*/

/* OPERADORES DE ATRIBUIÇÃO

= -> Atribuição
+= -> Adição
-= -> Subtração
/= -> Divisão
*= -> Multiplicação
%= -> Resto

*/
const operadoresAtribuicao = `--- Operadores Atribuição ---`
console.log(operadoresAtribuicao)

let firstnumber = 10
//firstnumber = firstnumber + 2 // mesma coisa que o exemplo de baixo!
firstnumber += 2 //Adição

console.log(firstnumber)

const finishOpedoresAtribuicao = `-----------------------------------------------------------`


/* OPERADORES DE COMPARAÇÃO 

== -> Igual // Ele compara o valor, mas nao compara o tipo do valor //NUNCA USA ESSE AQUI!
=== -> TOTALMENTE Igual // Ele verifica o tipo de dado (se é string ou number)!

!= -> Diferente // Ele compara o valor, mas não compara o tipo do valor // NUNCA USE ESSE AQUI
!== -> TOTALMENTE Diferente // Ele verifica o tipo do dado (se é string ou number)!

*/

let operadoresDeComparacao = `--- OPERADORES DE COMPARAÇÃO ---`
console.log(operadoresDeComparacao)

const firstPerson = 'João'
const seccondPerson = "Maria"

console.log(firstPerson == seccondPerson)
console.log(firstPerson === seccondPerson)
console.log(firstPerson != seccondPerson)
console.log(firstPerson !== seccondPerson)

const soma2 = 2
console.log(soma2)

const numberFirst = "23"
const numberTwo = 23

console.log(numberFirst == numberTwo)
console.log(numberFirst === numberTwo)
console.log(numberFirst != numberTwo)
console.log(numberFirst !== numberTwo)

let finishOperadoresDecomparacao = `-----------------------------------------------------------`
console.log(finishOperadoresDecomparacao)

/* OPERADORES DE COMPARAÇÃO PT2

>   -> maior
>=   -> maior ou igual
<   -> menor
<=   -> menor ou igual 

*/

const operadoresDeComparacaoPt2 = `--- OPEDADORES DE COMPARAÇÃO PT2 ---`
console.log(operadoresDeComparacaoPt2)

const primeiroNumero = 10
const segundoNumero = 20

console.log(primeiroNumero > segundoNumero)
console.log(primeiroNumero < segundoNumero)
console.log(primeiroNumero >= segundoNumero)
console.log(primeiroNumero <= segundoNumero)

const finishOperadoresDeComparacaoPt2 = `-----------------------------------------------------------`
console.log(finishOperadoresDeComparacaoPt2)

/* OPERADORES LÓGICOS

&&   -> E
    true && true = true
    true && false = false
    false && false = false
    
||   -> Ou
    true || true = true
    true || false = true
    false || false = false

!    -> Negação
    !true = false
    !false = true

    O que é necessário para alguém fazer uma transferência bancária?

    - Ter saldo em conta
    - Minha conta não esteja bloqueada
    - A conta destino deve está correta    LOGICA &&

    O que é necessario para um celular desbloquear?

    - Digitar a senha correta
    - Fazer reconhecimento digital
    - Fazer reconhecimento facial   LÓGICA ||


    
*/
let operadoresLogicos = `--- OPERADORES LÓGICOS ---`
console.log(operadoresLogicos)

console.log(true || false || false)
console.log(!false)
console.log(!true)
console.log( !(!(true && true && true) && !(false & false & false)))

let finishoperadoresLogicos = `-------------------------------------------------`
console.log(finishoperadoresLogicos)

/* OPERADOR TERNÁRIO OU CONDICIONAL
 
?  se
:  se não

*/

const operadorTernario = `--- OPERADOR TERNÁRIO OU CONDICIONAL ---`
console.log(operadorTernario)

const rain = false

const umbrela = rain ? 'levar guarda-chuve' : 'deixar guarda-chuva'
console.log(umbrela)

// PRECISO TRANSFERIR MEU DINHEIRO 

const balance = true
const isNotBlocked = true
const accountExist = true

const transferOK = balance && isNotBlocked && accountExist ? 'Transferencia Realizada' : 'Transferencia Negada'
console.log(transferOK)

const finishOperadorTernario = `-------------------------------------------------------------------`

/* OPERADORES typeof e delete (DELETE SÓ FUNCIONA PARA OBJETOS)
*/

const operadoresTypeofEdelete = `--- OPERADORES typeof e delete ---`
console.log(operadoresTypeofEdelete)

const myNumber = 20
const myString = 'Olá, sou uma string'

const myObejtct = {
    name: 'Jõao',
    age: "18",
    height: "1.85"
}

console.log(typeof myNumber)
console.log(typeof myString)
console.log(typeof myObejtct)

delete myObejtct.age
console.log(myObejtct)

const finishOperadoresTypeofEdelete = `---------------------------------------------------`
console.log(finishOperadoresTypeofEdelete)

/* CONTROLE DE FLUXO - CONDICIONAIS - IF / ELSE

if = se
else = se não
*/

const condicionaisIfElse = `--- CONTROLE DE FLUXO - CONDICIONAIS - IF / ELSE ---`
console.log(condicionaisIfElse)

let age = 21

if(age >= 18){
    console.log('A pessoa é maior de idade')
}
else{
    console.log('A pessoa NÃO é maior de idade ')
}

const finishCondicionaisIfElse = `-------------------------------------------------`
console.log(finishCondicionaisIfElse)

/* CONTROLE DE FLUXO - CONDICIONAIS - ELSE IF

if = se
else = se não
else if = mais se...
*/

const condicionaisElseIf = `--- CONTROLE DE FLUXO - CONDICIONAIS - ELSE IF ---`
console.log(condicionaisElseIf)

const temperature = 43

if(temperature >= 36 && temperature <= 39){
    console.log('A pessoa está saúdavel')
}
else if(temperature > 39){
    console.log('A pessoa está com febre')
}
else{
    console.log('A pessoa está com a temperatura muito baixa, procure um médico')
}

const finishCondicionaisElseIf = `---------------------------------------------`
console.log(finishCondicionaisElseIf)  

/* CONTROLE DE FLUXO - CONDICIONAIS - SWITCH CASE
*/
let condicionaisSwitchCase = `--- CONTROLE DE FLUXO - CONDICIONAIS - SWITCH CASE ---`
console.log(condicionaisSwitchCase)

const temperatura = 36

switch(temperatura){
    case 30:
        console.log('A pessoa está com a temperatura MUITO abaixo do normal')
    break
    
    case 33:
        console.log('A pessoa está com a temperatura abaixo do normal')
    break
    
    case 36:
        console.log('A pessoa está com a temperatura normal')
    break
    
    default:
        console.log('Temperatura não encontrada')
}

const bool = true

switch (bool){
    case true:
        console.log('it´s true')
    break   

    case false:
        console.log('it´s false')
    break    
}

let finishCondicionaisSwitchCase = `--------------------------------------------------------`
console.log(finishCondicionaisSwitchCase)

/* ESTRUTURAS DE REPETIÇÃO - FOR

4+4+4+4 = 16
4*4 = 16
*/

const estruturaFor = `--- ESTRUTURAS DE REPETIÇÃO - FOR ---`
console.log(estruturaFor)

for(let i = 0; i <= 10; i++){
    console.log(i)
}

const students = ['Bruna', 'Ana', 'Jõao', 'Maria', 'Pero']

for(let i = 0; i < students.length; i++){
    console.log(`${students[i]} está presente a aula!`)
}

console.log(students.length)

const finishEstruturaFor = `--------------------------------------------------------`
console.log(finishEstruturaFor)

/* ESTRUTURA DE REPETIÇÃO - WHILE (ENQUANTO)    
*/

let estruturaWhile = `--- ESTRUTURA DE REPETIÇÃO - WHILE (ENQUANTO) ---`
console.log(estruturaWhile)

let i = 2323232
while(i > 20){
    console.log(i)
    i/=40
}

let finishEstruturaWhile = `----------------------------------------------------------`
console.log(finishEstruturaWhile)

/* ESTRUTURA DE REPETIÇÃO - FOR OF
*/

let repetiçãoForOf = `--- ESTRUTURA DE REPETIÇÃO - FOR OF ---`
console.log(repetiçãoForOf)

let myName = 'Rodolfo'
let allNames = ['Maria', 'João', 'Pedro', 'Gilberto']

for(let letter of myName){
    console.log(letter)
}

for(let name of allNames){
    console.log(name)
}    

let finishRepeticaoForOf = `----------------------------------------------------------`
console.log(finishRepeticaoForOf)

/* ESTRUTURA DE REPETIÇÃO - FOR IN (É PARA OBJETO)
*/

const estruturaForIn = `--- ESTRUTURA DE REPETIÇÃO - FOR IN ---`
console.log(estruturaForIn)

const estudante = {
    name: 'Caio',
    age: 26,
    genre: 'Male',
}

// for(let property in estudante){
// console.log(property)
// } 

for(const property in estudante){
    console.log(`${property} : ${estudante[property]}`)
}

let finishEstruturaForIn = `----------------------------------------------------------`
console.log(finishEstruturaForIn)
/*

    Funções / Functions

*/

const funcaoFuction = `--- FUNÇÕES / FUNCTIONS ---`
console.log(funcaoFuction)

function printingAboutCodeClub(){
    console.log('Estou aprendendo muito com o CodeClub')
}

printingAboutCodeClub()
printingAboutCodeClub()
printingAboutCodeClub() // voce pode chamar a função quantas vezes você quiser!

const finishFuncaoFuction = `----------------------------------------------------------`
console.log(finishFuncaoFuction)

/*
    - Functions

    Arguments and Parameters

*/

let argumentsParameters = `--- ARGUMENTS AND PARAMETERS ---`
console.log(argumentsParameters)

function som(num1, num2){ //number1 and number2 are my parameters (numero1 e numero2 sao meus parametos)
    console.log(num1 + num2)
}

som(2,3) // INVOCA A FUNÇÃO // INVOKE OR CALL
som(5,8)

let finishArgumentosParameters = `-------------------------------------------`
console.log(finishArgumentosParameters)

/*
    Return Function
*/

const returnFunction = `--- RETURN FUNCTION ---`
console.log(returnFunction)

function sum(number1, number2){ //VOID = vazio -> (quando nao coloca o return) é para imprimir fora da function o return
    return number1 + number2
}

const number01 = 10
const number02 = 20
sum(5,7)
sum(2,2)
sum(number01, number02)

console.log(`O primeiro número é ${number01}`)
console.log(`O segundo número é ${number02}`)
console.log(`A soma dos dois números é ${sum(number01, number02)}!`)

const sam = function(numberOne, numberTwo){ //VOID = vazio -> (quando nao coloca o return) é para imprimir fora da function o return
    return numberOne + numberTwo
}

const resultado = sam(number01, number02)
console.log(`E a soma dos dois números é ${resultado}`)

const finishReturnFunction = `------------------------------------------------`
console.log(finishReturnFunction)

/*

    - Arrow Functions

*/

const arrowFunctions = `--- ARROW FUNCTIONS ---`
console.log(arrowFunctions)

//const ama = function(numeral1, numeral2){ 
//     result = numeral1 + numeral2
// }
const ama = (numeral1, numeral2) => numeral1 + numeral2 // PROCURE USAR ARROW FUNCTIONS

const numeralOne = 20
const numeralTwo = 30

console.log(`O primeiro número é ${numeralOne}`)
console.log(`O segundo número é ${numeralTwo}`)

const resultnumeral = ama(numeralOne, numeralTwo)
console.log(`E a soma dos dois números é ${resultnumeral}`)

console.log(`A soma dos dois números é ${sum(numeralOne, numeralTwo)}!`)


const ame = (numeral1, numeral2) => { // PROCURE USAR ARROW FUNCTIONS
    return numeral1 + numeral2
}

const numeralTe = 30
const numeralTo = 30

const resultTo = ame(numeralTe, numeralTo)
console.log(`E a soma dos dois números é ${resultTo}`)

console.log(`A soma dos dois números é ${ame(numeralTe, numeralTo)}!`)

const finishArrowFunctions = `-----------------------------------------------`
console.log(finishArrowFunctions)
