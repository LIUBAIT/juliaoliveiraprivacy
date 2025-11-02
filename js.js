function showPaymentSection() {
    const paymentSection = document.getElementById('payment-section');
    if (paymentSection.style.display === 'none') {
      paymentSection.style.display = 'block';
      document.querySelector('.subscribe-button').style.display = 'none'; // Oculta o botão após clicar
    }
  }

  // Copiar o código Pix ao clicar
  document.getElementById('pixCode').addEventListener('click', function () {
    const pixCode = document.getElementById('pixCode').textContent.trim();
    navigator.clipboard
      .writeText(pixCode)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Pix copiado!',
          text: 'Cole no seu banco para fazer o pagamento.',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok',
        });
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: 'Não foi possível copiar o código.',
          confirmButtonColor: '#d33',
          confirmButtonText: 'Ok',
        });
      });
  });
