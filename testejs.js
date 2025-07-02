let alunos=["joao","kaio","vitor","sergio","amanda"];
alunos.push("mariana");
console.log(alunos);
alunos.shift(0);
console.log(alunos);
alunos.splice(2, 1);
console.log(alunos);



let dormindo = "sono";
if(dormindo=="sono"){
    console.log("continuo dormindo");
}
else{
    console.log("tento dormir")
};
let comida = {nome:"raviolli" , preço:39 , tipo:"massa"};
for(let chave in comida){
    console.log(chave + ":" + comida[chave]);
}
let aluno=[
    {nome:"joao", nota1=4 , nota2=8}];
for(let media in aluno){
    console.log(media==(nota1+nota2):2 )
}
