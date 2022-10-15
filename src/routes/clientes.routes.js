import { Router } from "express";
import { getClientes, createNewClient, getClientById, deleteClientById, getTotalClients, UpdateClientById, getClientByDni, getTecnicoName, getRouter, getUserWhereDis, getClientByDistrito } from "../controllers/clientes.controllers"
const router = Router()

//* Rutas
router.get('/clientes', getClientes)
router.post('/clientes', createNewClient)
router.get('/clientes/count', getTotalClients)
router.get('/clientes/:id', getClientById)
router.get('/clientes/distrito/:distrito', getClientByDistrito)
router.delete('/clientes/:id', deleteClientById)
router.put('/clientes/:id', UpdateClientById)
router.get('/clientes/dni/:dni', getClientByDni)
router.get('/tecnicoEstado', getTecnicoName)
router.get('/router', getRouter)
router.get('/consultasUsuario/:distrito', getUserWhereDis)

export default router