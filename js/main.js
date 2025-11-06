document.addEventListener('DOMContentLoaded', function () {
  const flipper = document.querySelector('.flipper');

  // torna flipCard global
  window.flipCard = function () {
    if (flipper) {
      flipper.classList.toggle('flipped');
    }
  };

  // Login fake
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      alert('Login efetuado (fake): ' + email);
    });
  }

  // Cadastro fake
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const pw = document.getElementById('senha').value;
      const pw2 = document.getElementById('confirmaSenha').value;
      if (pw !== pw2) {
        alert('As senhas não coincidem!');
        return;
      }
      alert('Conta criada (fake)! Agora você pode logar.');
      flipCard();
    });
  }
});
