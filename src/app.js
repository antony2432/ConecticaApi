import express from "express";
import config from "./config"
import clientesRouter from "./routes/clientes.routes"

//* cors
import cors from "cors"

const app = express();
app.use(cors());
//* setting
app.set('port', config.port)

// midewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(clientesRouter)

//exportamos el app
export default app;