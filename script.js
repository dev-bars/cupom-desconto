/*
- O desafio do projeto foi criar uma funçao que calcule descontos num produto, quando aplicado cupons.
- Deve-se imaginar que o usuário já conheça o código dos cupons que são [cupom20 ou cupom30]
*/

alert("Os cupons disponíveis são: cupom20 e cupom30")

var precoProduto = 45.50;
var inserirCupom = prompt("Insira o código do seu cupom");


function calcularDescontoCupom() {
if (inserirCupom === "cupom20") {
    console.log("O valor com o desconto do cupom é R$ " + (precoProduto - 20));
} else if (inserirCupom === "cupom30") {
    console.log("O valor com o desconto do cupom é R$ " + (precoProduto - 30));
}  else {
    console.log("Cupom inválido, o valor total é R$ " + precoProduto);
}
}

calcularDescontoCupom();

function adicionarProduto() {
    
}