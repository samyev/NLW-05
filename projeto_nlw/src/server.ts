// importando o express pra iniicar o server
import express from "express";

// chamando o app / servidor
const app = express();

// criação de rotas 

//GET = busca
app.get("/", (request, response) => {
  return response.json({
    message: "Olá NLW #05!!!"
  });
});

// POST = Criação
app.post("/users", (request, response) => {
  return response.json({
    message: "Usuário criado com sucesso!"
  });
});

// inciando o servidor
app.listen(3333, () => console.log("Server is running on port 3333"))