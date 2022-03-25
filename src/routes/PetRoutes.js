import { Router } from 'express'

import petExistsById from '../middlewares/petExistsById.js'

import { PetController } from '../controllers/index.js'
const petController = new PetController()

const petRoutes = Router()


// Lista todos os pets
petRoutes.get('/', petController.list)

// Lista pet por nome
petRoutes.get('/findByName/:name', petController.findByName)

// Cria um novo pet
petRoutes.post('/', petController.create)

/***/

// Middleware para validar se o pet existe
petRoutes.use('/:id', petExistsById)

// Lista pet por id
petRoutes.get('/:id', petController.findById)

// Atualiza os dados que forem enviados
petRoutes.put('/:id', petController.update)

// Atualiza a imagem
petRoutes.patch('/:id', petController.updateImage)

// Deleta um pet por id
petRoutes.delete('/:id', petController.delete)

export default petRoutes