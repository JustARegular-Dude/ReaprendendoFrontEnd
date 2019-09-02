
// // mudando o valor de uma tag no DOM
var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];


    var tdNome = paciente.querySelector(".info-nome");
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdGordura = paciente.querySelector(".info-gordura");
    var tdImc = paciente.querySelector(".info-imc");

    var pacienteNome = tdNome.textContent;
    var pacientePeso = tdPeso.textContent;
    var pacienteAltura = tdAltura.textContent;
    var pacienteGordura = tdGordura.textContent;


    var pacienteImc = pacientePeso / (pacienteAltura * pacienteAltura);
    console.log(pacienteNome);
    console.log(pacientePeso);
    console.log(pacienteAltura);
    console.log(pacienteGordura);

    var pesoValido = true;
    var alturaValida = true;

    if (pacientePeso <= 0 || pacientePeso >= 1000) {
        tdImc.textContent = "Peso Inválido";
        pesoValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if (pacienteAltura <= 0 || pacienteAltura >= 3.00) {
        tdImc.textContent = "Altura Inválida";
        alturaValida = false;
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        tdImc.textContent = pacienteImc.toFixed(2);
    }
}


var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    console.log("fui clicado!");
});
