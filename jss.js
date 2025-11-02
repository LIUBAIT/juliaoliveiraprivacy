 // Mostra o popup ao carregar a página
    window.onload = function() {
      document.getElementById('popup-overlay').style.display = 'flex';
    };

    // Função do botão "Comprar"
    function handleBuy() {
      window.location.href = 'https://seusite.com/comprar'; // Substitua pelo link de compra
    }

    // Função do botão "Suporte"
    function handleSupport() {
      window.location.href = 'https://seusite.com/suporte'; // Substitua pelo link de suporte
    }