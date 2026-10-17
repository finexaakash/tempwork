document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  message.textContent = "Demo successful! This form is not connected to email yet.";
  form.reset();
});
