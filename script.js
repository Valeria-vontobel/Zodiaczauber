document.addEventListener("DOMContentLoaded", () => {
    const dateEl = document.getElementById("date");
    const hoje = new Date();
    const formatada = hoje.toLocaleDateString("pt-BR", { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    if (dateEl) dateEl.textContent = Previsão para ${formatada};
  });