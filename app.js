// Application principale
const config = require("./config.js");

function startApp() {
  console.log("🚀 Lancement de l'application :", config.appName);
  console.log("Version :", config.version);
  console.log("Auteur :", config.author);
}

startApp();
