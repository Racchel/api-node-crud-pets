import { PetRepository } from '../repositories/index.js'
const petRepository = new PetRepository()

const petExistsById = async(req, res, next) => {
   const { id } = req.params

   try {
      const response = await petRepository.findById(id)

      if (response.rows.length === 0) {
         return res.status(404).send({
            message: 'Pet does not exist'
         })
      }

      next()
   } catch (err) {
      console.error(err)
      return res.status(400).send(err)
   }
}

export default petExistsById
