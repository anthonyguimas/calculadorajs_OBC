const primeroNome = prompt("Informe o primeiro nome do recruta");
const sobrenome = prompt("Informe o sobrenome do recruta:");
const campoDeEstudo = prompt("Qual é o campo de estudo do recruta?");
const anoDeNascimento = prompt("Qual ano o recruta nasceu?");

alert(
  "Recruta cadastrado com sucesso!?\n" +
    "Nome completo: " +
    primeiroNome +
    sobrenome +
    "campoDeEstudo: " +
    campoDeEstudo +
    "Idade: " +
    (2023 - anoDeNascimento)
);
