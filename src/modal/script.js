function abrirModal(modalId) {
    let modal = document.getElementById(modalId);

    modal.innerHTML = `
        <div class="modal-content">
            <button class="fechar-modal">&times;</button>

            <section class="home">
                <form class="tzeetForm">
                    <img src="https://pbs.twimg.com/profile_images/1396887377608593411/8jy-FPk__400x400.jpg" alt="Foto de Perfil">
                    <textarea placeholder="O que você está pensando?" ></textarea>
                </form>
                
                <div class="replyConfig">
                    <a href="#"><i class="bi bi-globe-americas"></i> Everyone can reply</a>
                </div>

                <div class="footerTzeet">
                    <section class="multimedia">
                        <a href="#"><i class="bi bi-image"></i></a>
                        <a href="#"><i class="bi bi-filetype-gif"></i></a>
                        <a href="#"><i class="bi bi-emoji-smile"></i></a>
                        <a href="#"><i class="bi bi-bar-chart"></i></a>
                        <a href="#"><i class="bi bi-calendar-event"></i></a>
                        <a href="#"><i class="bi bi-geo-alt"></i></a>
                    </section>

                    <section class="statusEnvio">
                        <span class="contador">140</span>
                        <span class="separador">|</span>
                        <div class="adicionarTzeet">
                            <i class="bi bi-plus-circle"></i>
                        </div>
                        <button class="enviarTzeet" disabled>Enviar</button>
                    </section>
                </div>
            </section>
        </div>`;

    modal.showModal();

    const textarea = modal.querySelector("textarea");
    const contador = modal.querySelector(".contador");
    const separador = modal.querySelector(".separador");
    const botaoEnviar = modal.querySelector(".enviarTzeet");

    const LIMITE_MAXIMO = 140;

    textarea.addEventListener("input", () => {
        let texto = textarea.value;
        let caracteresRestantes = LIMITE_MAXIMO - texto.length;

        contador.style.display = texto.length > 0 ? "inline" : "none";
        separador.style.display = texto.length > 0 ? "inline" : "none";

        contador.style.color =
            caracteresRestantes < 0 ? "rgb(255,0,0)" :
            caracteresRestantes < 40 ? "rgb(255,255,0)" : "";

        contador.textContent = caracteresRestantes;
        botaoEnviar.disabled = texto.length === 0 || caracteresRestantes < 0;
    });

    modal.querySelector(".fechar-modal").addEventListener("click", () => {
        modal.close();
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
}


document.getElementById("modalTzeetar").addEventListener("click", function () {
    abrirModal("modalTzeet");
});

document.getElementById("modalTzeetarMobile").addEventListener("click", function () {
    abrirModal("modalTzeetMobile");
});
