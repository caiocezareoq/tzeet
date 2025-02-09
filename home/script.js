document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("textarea");
    const contador = document.querySelector(".contador");
    const separador = document.querySelector(".separador");
    const botaoEnviar = document.querySelector(".enviarTzeet");

    const LIMITE_MAXIMO = 140;

    textarea.addEventListener("input", () => {
        let texto = textarea.value;
        let caracteresRestantes = LIMITE_MAXIMO - texto.length;

        if(texto.length > 0){
            contador.style.display = "inline";
            separador.style.display = "inline";
        }
        else{
            contador.style.display = "none";
            separador.style.display = "none"
        }

        if(caracteresRestantes < 0){
            contador.style.color = "rgb(255,0,0)";
        } else if(caracteresRestantes < 40){
            contador.style.color = "rgb(255,255,0)";
        }else{
            contador.style.color = "";
        }
        contador.textContent = caracteresRestantes;

        if(texto.length > 0 && caracteresRestantes >= 0){
            botaoEnviar.disabled = false;
        } else{
            botaoEnviar.disabled = true;
        }
    });
});