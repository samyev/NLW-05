// importando o express pra iniicar o server
import express from "express";

import "./database";
import { routes } from "./routes";

// chamando o app / servidor
const app = express();

app.use(express.json());

app.use(routes);

// inciando o servidor
app.listen(3333, () => console.log("Server is running on port 3333"))