//const paragrafo = document.createElement("p")
// <p> </p>
//paragrafo.innerText = "Isso é um paragrafo"
// <p> Isso é um paragrafo </p>
//document.body.appendChild(paragrafo)

function enviarNome(){
//pegando a teg input
const input = document.querySelector('input')
//pegando o campo do input
const nome = input.value
input.value = ""
//criando o elemtento <p>
const nomeUsuario = document.createElement('p')
//colocando o valor do input dentro do elemento <p>
//<p> NOME QUE VOCÊ colocou </p>
nomeUsuario.innerText = nome
document.body.appendChild(nomeUsuario)
}