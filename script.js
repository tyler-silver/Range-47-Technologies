const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const year = document.querySelector("#year");
const contactForm = document.querySelector("#contact-form");

year.textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("nav-open", !isOpen);
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(contactForm);
  const name = data.get("name").trim();
  const email = data.get("email").trim();
  const topic = data.get("topic");
  const message = data.get("message").trim();
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Topic: ${topic}`,
    "",
    message,
  ].join("\n");

  const subject = encodeURIComponent(`Range47 Technologies inquiry: ${topic}`);
  const encodedBody = encodeURIComponent(body);
  window.location.href = `mailto:tyler.argentwrk@gmail.com?subject=${subject}&body=${encodedBody}`;
});
