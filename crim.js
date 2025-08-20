let anos=70;
let nulo = null;
let nome = "jao";

console.log(anos);
console.log(typeof(anos));

console.log(nulo);
console.log(typeof(nulo));

console.log(nome);
console.log(typeof(nome));

for (let i = 1; i <= 3; i++) {
  let nome = prompt(" nome do aluno:");
  let nota1 = parseFloat(prompt("Digite a primeira nota de " + nome + ":"));
  let nota2 = parseFloat(prompt("Digite a segunda nota de " + nome + ":"));

  let media = (nota1 + nota2) / 2;
  let condicao = "";

  if (media >= 6) {
    condicao = "Aprovado";
  } else if (media >= 4) {
    condicao = "Recuperação";
  } else if (media<=3) {
    condicao = "Reprovado";
  }

  alert("Aluno: " + nome + "\nMédia: " + media.toFixed(2) + "\nCondição: " + condicao);
}

