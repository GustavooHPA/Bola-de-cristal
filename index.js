function FazerPergunta() {
  var pergunta = window.document.getElementById("pergunta")
  var Pergunta = String(pergunta.value)
  var Texto = window.document.getElementById("CampoDeTexto")
  const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
  ]
  if (Pergunta == "") {
    alert("Insira uma pergunta")
    Texto.innerHTML = ""
  } else {
    const  totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
    Texto.innerHTML = `${Pergunta} </br> ${respostas[numeroAleatorio]}`
  }
}

