const revealItems = document.querySelectorAll(
  ".hero-copy, .hero-card, .stats article, .service-card, .step-card, .testimonial-card, .contact-copy, .contact-form"
);

revealItems.forEach((item) => {
  item.setAttribute("data-reveal", "");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item) => observer.observe(item));

const contactForm = document.querySelector(".contact-form");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const nome = formData.get("nome")?.toString().trim() || "";
  const telefone = formData.get("telefone")?.toString().trim() || "";
  const objetivo = formData.get("objetivo")?.toString().trim() || "";
  const mensagem = formData.get("mensagem")?.toString().trim() || "";

  const whatsappText = encodeURIComponent(
    `Oi, Priscilla! Meu nome é ${nome} e gostaria de saber mais sobre o seu atendimento nutricional.\n` +
    `WhatsApp: ${telefone}\n` +
    `Objetivo: ${objetivo}\n` +
    `Mensagem: ${mensagem || "Sem mensagem adicional."}`
  );

  window.open(`https://wa.me/5500000000000?text=${whatsappText}`, "_blank", "noopener");
});
