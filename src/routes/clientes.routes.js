import { Router } from "express";
import {getClientes, createNewClient, getClientById, deleteClientById, getTotalClients, UpdateClientById, getClientByDni} from "../controllers/clientes.controllers"
const router = Router()

//* Rutas
 router.get('/clientes', getClientes)
 router.post('/clientes', createNewClient)
 router.get('/clientes/count', getTotalClients)
 router.get('/clientes/:id', getClientById)
 router.delete('/clientes/:id', deleteClientById)
 router.put('/clientes/:id', UpdateClientById)
 router.get('/clientes/dni/:dni', getClientByDni)

 export default router