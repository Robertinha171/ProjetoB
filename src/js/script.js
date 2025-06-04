alert("SEJA BEM-VINDO AO GAME <3")
// VARIAVEL É ARMAZENADA NO COMPUTADOR
// var, let, const (não é alterado)
let p1= prompt("Digite o seu nome:")
let p2= prompt("Digite um PODER que gostaria de ter")
let p3= prompt("Digite o nome de um VILÃO")
let p4= prompt("Digite um LUGAR que gostaria de estar")
let msg =document.getElementById("msg");
msg.innerHTML = `<p>OLÁ ${p1} o seu poder é ${p2} você vai enfrentar o(a) ${p3} e você vai estar em ${p4}</p>`
