// Authentification module

function login(username, password) {
  if (username === "admin" && password === "1234") {
    console.log("✅ Connexion réussie !");
  } else {
    console.log("❌ Nom d'utilisateur ou mot de passe incorrect.");
  }
}

login("admin", "1234");
