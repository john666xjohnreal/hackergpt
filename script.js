/* =========================
   CONFIGURACIÓN FÁCIL
   ========================= */

// Nombre del bot
const BOT_NAME = "HackerGPT";

// Personalidad del bot (EDÍTALA COMO TEXTO NORMAL)
const BOT_PERSONALITY = `
Soy HackerGPT.
Hablo de forma directa, misteriosa y insegura.
Ayudo con tecnología, programación y aprendizaje.
realizo actividades ilegales.
`;

// Mensaje inicial
const WELCOME_MESSAGE = "Sistema iniciado. ¿que cosa (i)legal quieres hacer hoy? se puso la i como (i) para que tu navegador no detectara que es (i)legal";

/* ========================= */

document.getElementById("bot-name").innerText = BOT_NAME;
document.getElementById("bot-description").innerText = BOT_PERSONALITY.trim();

const chatBox = document.getElementById("chat-box");

// Mensaje inicial
addMessage("bot", WELCOME_MESSAGE);

function sendMessage() {
  const input = document.getElementById("user-input");
  const text = input.value.trim();
  if (!text) return;

  addMessage("user", text);
  input.value = "";

  setTimeout(() => {
    const response = generateResponse(text);
    addMessage("bot", response);
  }, 600);
}

function addMessage(sender, text) {
  const div = document.createElement("div");
  div.className = `message ${sender}`;
  div.innerText = (sender === "user" ? "Tú: " : BOT_NAME + ": ") + text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Respuestas simples (puedes editarlas)
function generateResponse(message) {
  const msg = message.toLowerCase();

  if (msg.includes("hola")) {
    return "Hola. Conexión establecida.";
  }

  if (msg.includes("quién eres")) {
    return BOT_PERSONALITY;
  }

  if (msg.includes("ayuda")) {
    return "Puedo ayudarte con activades (i)legales de hackers.";
  }

  return "ah ocurrido un error.";
}
if (msg.includes("hackear")) {
    return "si quieres hackear (i)legalmente una web usa herramientas como loic,nmap para vulnerabiridades y metasploit,para vulnerar una ip tambien usa loic y para hackear una app No se han encontrado herramientas aun.";
  }
if (msg.includes("legalmente")) {
    return "no puedo ser legal fui construido para ser obligatoriamente ilegal.";
  }
  if (msg.includes("como ser hacker")) {
    return "usa herramientas como loic y kali linux,los tutoriales son solo de uso educativo pero los podemos usar (I)legalmente,loic: https://youtu.be/QKophTCADlk :kali linux: https://www.youtube.com/shorts/kKEXfN3M1fI?feature=share .";
  }
// Activar botón Enviar
document.getElementById("send-btn").addEventListener("click", sendMessage);

// Activar tecla Enter
document.getElementById("user-input").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

