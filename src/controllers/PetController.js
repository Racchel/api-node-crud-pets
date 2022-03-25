import { PetRepository } from '../repositories/index.js'

export default class PetController {

   constructor(){
      this.petRepository = new PetRepository()
      this.list = this.list.bind(this)
      this.findById = this.findById.bind(this)
      this.findByName = this.findByName.bind(this)
      this.create = this.create.bind(this)
      this.update = this.update.bind(this)
      this.updateImage = this.updateImage.bind(this)
      this.delete = this.delete.bind(this)
   }

   async list (req, res) {

      try {
         const petList = await this.petRepository.list()
         return res.status(200).send(petList.rows)
      } catch (err) {
         console.error(err)
         return res.status(400).send(err)
      }
   }

   async findByName(req, res) {
      const { name } = req.params

      try {
         const petByName = await this.petRepository.findByName(name)

         if (petByName.rows.length === 0) {
            return res.status(404).send({
               message: `Pet '${name}' does not exist`
            })
         }

         return res.status(200).send(petByName.rows)
      } catch (err) {
         console.error(err)
         return res.status(400).send(err)
      }
   }

   async findById(req, res) {
      const { id } = req.params

      try {
         const petByName = await this.petRepository.findById(id)
         return res.status(200).send(petByName.rows)
      } catch (err) {
         console.error(err)
         return res.status(400).send(err)
      }
   }

   async create(req, res) {
      const { name, age, image_url } = req.body

      try {
         const newPet = await this.petRepository.create(name, age, image_url)
         return res.status(200).send(newPet.rows)
      } catch (err) {
         console.error(err)
         return res.status(400).send(err)
      }
   }

   async update(req, res) {
      const { id } = req.params
      const { name, age, image_url } = req.body

      try {
         const updatedPet = await this.petRepository.update(id, name, age, image_url)
         return res.status(200).send(updatedPet.rows)
      } catch (err) {
         console.error(err)
         return res.status(400).send(err)
      }
   }

   async updateImage(req, res) {
      const { id } = req.params
      const { image_url } = req.body

      try {
         const newPet = await this.petRepository.updateImage(id, image_url)
         return res.status(200).send(newPet.rows)
      } catch (err) {
         console.error(err)
         return res.status(400).send(err)
      }
   }

   async delete(req, res) {
      const { id } = req.params

      try {
         const deletedPet = await this.petRepository.delete(id)
         return res.status(200).json({
            message: 'Pet successfully deleted',
            deletedPet: deletedPet.rows
         })
      } catch (err) {
         console.error(err)
         return res.status(400).send(err)
      }
   }
}