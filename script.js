document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function (e) {
    setTimeout(() => {
      form.reset();
      successMessage.classList.remove("hidden");
      setTimeout(() => successMessage.classList.add("hidden"), 5000);
    }, 1000);
  });

  // Smooth scroll efecto por secciones ya lo gestiona CSS con scroll-behavior: smooth;
});
