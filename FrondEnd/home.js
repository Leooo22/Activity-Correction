// home.js

// Encontre o link de logout
const logoutLink = document.querySelector('a[href="/logout"]');

// Adicione um manipulador de eventos de clique ao link de logout
if (logoutLink) {
  logoutLink.addEventListener('click', (e) => {
    e.preventDefault(); // Impede que o link siga o URL

    // Adicione um log para verificar se o evento está sendo disparado
    console.log("Clique no link de logout");

    // Redirecione o usuário para a página de login (login.html)
    window.location.href = "login.html"; 
  });
}
