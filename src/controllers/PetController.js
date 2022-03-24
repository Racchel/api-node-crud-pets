import { PetRepository } from '../repositories/index.js'
const petRepository = new PetRepository()

export default class PetController {

   constructor(){}

   async list (req, res) {

      try {
         const petList = await petRepository.list()
         return res.status(200).send(petList.rows)
      } catch (err) {
         console.log(err)
         return res.status(400).send(err)
      }
   }

   async findByName(req, res) {
      const { name } = req.params

      try {
         const petByName = await petRepository.findByName(name)
         return res.status(200).send(petByName.rows)
      } catch (err) {
         console.log(err)
         return res.status(400).send(err)
      }
   }

   async create(req, res) {
      const { name, age, image_url } = req.body

      try {
         const newPet = await petRepository.create(name, age, image_url)
         return res.status(200).send(newPet.rows)
      } catch (err) {
         console.log(err)
         return res.status(400).send(err)
      }
   }

   async update(req, res) {
      const { id } = req.params
      const { name, age, image_url } = req.body

      try {
         const updatedPet = await petRepository.update(id, name, age, image_url)
         return res.status(200).send(updatedPet.rows)
      } catch (err) {
         console.log(err)
         return res.status(400).send(err)
      }
   }

   async updateImage(req, res) {
      const { id } = req.params
      const { image_url } = req.body

      try {
         const newPet = await petRepository.updateImage(id, image_url)
         return res.status(200).send(newPet.rows)
      } catch (err) {
         console.log(err)
         return res.status(400).send(err)
      }
   }

   async delete(req, res) {
      const { id } = req.params

      try {
         const deletedPet = await petRepository.delete(id)
         return res.status(200).send(deletedPet.rows)
      } catch (err) {
         console.log(err)
         return res.status(400).send(err)
      }
   }
}