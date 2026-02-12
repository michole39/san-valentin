// =========================
// CAMBIO DE SECCIONES
// =========================
function showSection(id) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => section.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// =========================
// IR A CARTA
// =========================
function goToLetter() {
    showSection("carta");
    startLetter();
}

// =========================
// IR A RECUERDO
// =========================
function goToRecuerdo() {
    showSection("recuerdo");
    animarRecuerdo();
}

// =========================
// TEXTO DE LA CARTA
// =========================
const cartaTexto = `
Para la mujer más hermosa del mundo:

Mi amor, se acerca una fecha más que importante.
Una fecha en la que me permito celebrar todo el amor que siento por vos.

La verdad es que estoy profundamente enamorado de vos.
Nunca pensé que podría llegar a sentir algo así por alguien.
Te convertiste en alguien esencial en mi vida… en alguien sin quien ya no me imagino caminando.

Hemos llegado a un punto en el que no puedo pensar en el futuro sin imaginar tu mano sosteniendo la mía.
Tengo tantos proyectos que quiero compartir con vos, tantos sueños que quiero construir a tu lado… que me emociona muchísimo la idea de caminar juntos, siempre a la par.

Sos una parte inmensa de mi vida.
Y creeme que no existe nada que no haría por vos.

Me sensibilizo mucho cuando se trata de vos…
Mientras escribo esto estoy al borde de las lágrimas.
Porque lo que siento es real, profundo y enorme.

Gracias por ser mi princesa.
Gracias por todo lo que me das.
Gracias por cómo me hacés sentir cada día.

Te amo muchísimo, bombón.

Y por todo esto… y por miles de cosas más…
quiero preguntarte algo.

(Estoy tan nervioso como aquel 4 de octubre del año pasado.)
`;

// =========================
// EFECTO MÁQUINA DE ESCRIBIR
// =========================
function startLetter() {
    const container = document.getElementById("textoCarta");
    const btn = document.getElementById("btnContinuar");

    container.innerHTML = "";
    btn.classList.add("hidden");

    let i = 0;

    function escribir() {
        if (i < cartaTexto.length) {
            let caracter = cartaTexto.charAt(i);

            if (caracter === "\n") {
                container.innerHTML += "<br>";
            } else {
                container.innerHTML += caracter;
            }

            i++;
            setTimeout(escribir, 35);
        } else {
            btn.classList.remove("hidden");
        }
    }

    escribir();
}

// =========================
// ANIMACIÓN DEL RECUERDO
// =========================
function animarRecuerdo() {
    const frases = [
        "Cada momento contigo…",
        "Se vuelve un recuerdo eterno.",
        "Y quiero seguir creando más."
    ];

    const texto = document.getElementById("recuerdoTexto");
    let i = 0;

    function mostrarFrase() {
        if (i < frases.length) {
            texto.style.opacity = 0;

            setTimeout(() => {
                texto.innerText = frases[i];
                texto.style.opacity = 1;
                i++;

                setTimeout(mostrarFrase, 3000);
            }, 1000);
        } else {
            setTimeout(() => {
                showSection("pregunta");
            }, 2000);
        }
    }

    mostrarFrase();
}

// =========================
// BOTONES DE LA PREGUNTA
// =========================
const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");

let escala = 1;
let intentos = 0;

btnNo?.addEventListener("click", () => {
    intentos++;
    escala += 0.2;
    btnSi.style.transform = `scale(${escala})`;

    if (intentos > 4) {
        btnNo.style.display = "none";
    }
});

btnSi?.addEventListener("click", () => {
    showSection("final");
});
