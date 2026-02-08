const fs = require("fs");

const serverConfig = {
  host: "localhost",
  localPort: 8080,
  ip: "192.168.1.1",
  servicePort: 443
};


const jsonData = JSON.stringify(serverConfig, null, 2);

try {

  fs.writeFileSync("server.json", jsonData);
  console.log("Arquivo server.json criado com sucesso!");
} catch (error) {
  console.error("Erro ao criar o arquivo:", error.message);
}
