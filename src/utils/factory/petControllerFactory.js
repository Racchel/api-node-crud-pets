import { PetController } from '../../controllers/index.js'
import { PetRepository } from '../../repositories/index.js'

const petRepository = new PetRepository()
const petController = new PetController(petRepository)

export default petController