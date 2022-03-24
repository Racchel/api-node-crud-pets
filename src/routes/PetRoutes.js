import { Router } from 'express'
import { PetController } from '../controllers/index.js'

const petRoutes = Router()
const petController = new PetController()

// Lista todos os pets
petRoutes.get('/', petController.list)

// Lista pet por nome
petRoutes.get('/:name', petController.findByName)

// Cria um novo pet
petRoutes.post('/', petController.create)

// Atualiza os dados que forem enviados
petRoutes.put('/:id', petController.update)

// Atualiza a imagem
petRoutes.patch('/:id', petController.updateImage)

// Deleta um pet por id
petRoutes.delete('/:id', petController.delete)

export default petRoutes