"use strict";
let funcionario1 = {
    codigo: 10,
    nome: 'francisco josé da silva',
    endereco: "Rua das flores",
    numeroCasa: 15,
    filiacao: "maria e joao"
};
let funcionario2 = {
    codigo: 11,
    nome: 'francisco',
    endereco: "Rua do rosário",
    numeroCasa: 14,
    filiacao: "josepha e pedro"
};
console.log("Funcionário -              Endereço -         numero da casa -        filiacao");
console.log(funcionario1.nome + "    " + funcionario1.endereco + "     " + funcionario1.numeroCasa + "                      " + funcionario1.filiacao);
console.log(funcionario2.nome + "                  " + funcionario2.endereco + "     " + funcionario2.numeroCasa + "                     " + funcionario2.filiacao);
