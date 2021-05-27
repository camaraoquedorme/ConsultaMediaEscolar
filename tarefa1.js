let arrayNotas = [];

const inputNotas = document.getElementById("notas");

const notasDigitadas = document.getElementById("notasDigitadas");

const sendButton = document.getElementById("send");

const inputResultado = document.getElementById("resultado");

function atualizaPlaceholder(){
    inputNotas.placeholder = `Digite a ${arrayNotas.length + 1}º nota`;
};

atualizaPlaceholder();

function atualizaNotasDigitadas(){
    notasDigitadas.textContent = `Notas Digitadas: ${arrayNotas.join(", ")}`;
};

atualizaNotasDigitadas();

function CalculaMedia(notas = []){

    let soma = 0;
    for(let contador = 0; contador < notas.length; contador++){
        soma = soma + notas[contador];
    };
    return soma / notas.length;
};


inputNotas.addEventListener("keydown", function(evento){
    if(evento.key === "Enter"){
        const nota = parseFloat(inputNotas.value);
        console.log(nota);

        if(inputNotas.value.trim() === ""){
            alert("Campo não pode estar vazio");
        }else if(isNaN(nota) ){
            alert("Caracter Inválido")
        }else{
            arrayNotas.push(nota);
        }

        inputNotas.value = "";

        atualizaPlaceholder();
        atualizaNotasDigitadas();
    };
});

sendButton.addEventListener("click", function(evente){
    inputResultado.value = CalculaMedia(arrayNotas).toFixed(2);

    arrayNotas = [];

    atualizaPlaceholder();
});
