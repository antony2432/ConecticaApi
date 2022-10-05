import { Router } from "express";
import {getClientes, createNewClient, getClientById, deleteClientById, getTotalClients, UpdateClientByDni} from "../controllers/clientes.controllers"
const router = Router()

//* Rutas
 router.get('/clientes', getClientes)
 router.post('/clientes', createNewClient)
 router.get('/clientes/count', getTotalClients)
 router.get('/clientes/:dni', getClientById)
 router.delete('/clientes/:id', deleteClientById)
 router.put('/clientes/:dni', UpdateClientByDni)

 export default router