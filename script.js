const toggle = document.querySelector("#invitation-toggle");
const close = document.querySelector("#invitation-close");
const invitation = document.querySelector(".invitation");
const page = document.querySelector(".page");
const card = document.querySelector("#invitation-card");
const hint = document.querySelector("#hint");
const introCopy = document.querySelector(".intro-copy");

function setOpen(isOpen) {
  invitation.classList.toggle("is-open", isOpen);
  page.classList.toggle("is-open", isOpen);
  introCopy.hidden = isOpen;
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Pozivnica je otvorena" : "Otvori rođendansku pozivnicu");
  toggle.disabled = isOpen;
  card.setAttribute("aria-hidden", String(!isOpen));
  card.inert = !isOpen;
  hint.textContent = isOpen ? "Zatvori pozivnicu gumbom ×" : "Dodirni kuvertu za iznenađenje ↓";
}

toggle.addEventListener("click", () => setOpen(true));
close.addEventListener("click", () => setOpen(false));
