let x = document.querySelector("#botao");

x.addEventListener("click", function(){
    let teste = document.createElement("tr");

    let firstNome = document.createElement("td");
    let lastNome = document.createElement("td");
    let age = document.createElement("td");

    let nomePessoa = document.querySelector("#primeiroNomePessoa");
    let ultimoNomePessoa = document.querySelector("#ultimoNomePessoa");

    firstNome.textContent = nomePessoa.value;
    lastNome.textContent = ultimoNomePessoa.value;
    age.textContent = "30";

    teste.appendChild(firstNome);
    teste.appendChild(lastNome);
    teste.appendChild(age);

    let tabela = document.querySelector("#tabela");
    tabela.appendChild(teste);
    console.log(teste);
});