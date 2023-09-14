//
document.addEventListener('DOMContentLoaded', function () {
  const solicitarBtn = document.getElementById('solicitarBtn');
  const contatoForm = document.getElementById('contatoForm');

  solicitarBtn.addEventListener('click', function () {
      // 
      alert('Obrigado por solicitar um orçamento!');
  });

  contatoForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Mensagem enviada com sucesso!');
      contatoForm.reset();
  });
});