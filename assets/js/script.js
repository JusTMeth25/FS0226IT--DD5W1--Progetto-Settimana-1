const apriContatti = document.getElementById("apri-contatti");
const chiudiContatti = document.getElementById("chiudi-contatti");
const overlay = document.getElementById("overlay-contatti");
const form = document.getElementById("form-contatti");
const sezioneContatti = document.getElementById("Contatti");

// Apri modale
apriContatti.addEventListener("click", (e) => {
  overlay.removeAttribute("hidden");
  document.body.style.overflow = "hidden";
});

// Chiudi modale (x)
chiudiContatti.addEventListener("click", (e) => {
  overlay.setAttribute("hidden", "");
  document.body.style.overflow = "";
});

// Chiudi modale (click fuori)
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.setAttribute("hidden", "");
    document.body.style.overflow = "";
  }
});

// Chiudi modale con Esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    overlay.setAttribute("hidden", "");
    document.body.style.overflow = "";
  }
});

const conferma = document.createElement("div");
conferma.id = "conferma-invio";
conferma.className = "conferma";
conferma.hidden = true;

conferma.innerHTML = `
<h3>✅ Dati inviati con successo!</h3>
<ul>
<li><strong>Nome:</strong><span id='conf-nome'></span></li>
<li><strong>Email:</strong><span id='conf-email'></span></li>
<li><strong>Motivo:</strong><span id='conf-motivo'></span></li>
<li><strong>Data:</strong><span id='conf-data'></span></li>
<li><strong>Messaggio:</strong><span id='conf-messaggio'></span></li>
</ul>
<button type='button' id='chiudi-conferma'>Chiudi</button>
`;

sezioneContatti.appendChild(conferma);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  conferma.hidden = false;
  document.body.style.overflow = "hidden";
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const motivo = document.getElementById("motivo").value.trim();
  const data = document.getElementById("data").value.trim();
  const messaggio = document.getElementById("messaggio").value.trim();

  document.getElementById("conf-nome").textContent = nome;
  document.getElementById("conf-email").textContent = email;
  document.getElementById("conf-motivo").textContent = motivo;
  document.getElementById("conf-data").textContent = data;
  document.getElementById("conf-messaggio").textContent = messaggio;

  conferma.removeAttribute("hidden");
  overlay.setAttribute("hidden", "");
  document.body.style.overflow = "";
  form.reset();
});

document.getElementById("chiudi-conferma").addEventListener("click", (e) => {
  conferma.setAttribute("hidden", "");
  document.body.style.overflow = "";
});
