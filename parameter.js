function soma(num1, num2) {
  return num1 + num2
}

console.log(soma(2, 2))
console.log(soma(245, 200))
console.log(soma(-300, 50))

function nomeIdade(nome, idade) {
  return `Meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade('Nicoly', 21))

function multiplica(num1 = 1, num2 = 1) {
  return num1 * num2
}

console.log(multiplica(soma(4, 5), soma(1, 1)))
