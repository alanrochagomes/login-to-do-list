document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtenha os valores de login e senha
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verifique se as credenciais estão corretas (simulação)
    if (username === "teste" && password === "123") {
      // Redirecione para a página desejada (simulação)
      window.location.href = "https://alanrochagomes.github.io/To-Do-List/";
    } else {
      alert("Credenciais incorretas. Tente novamente.");
    }
  });
