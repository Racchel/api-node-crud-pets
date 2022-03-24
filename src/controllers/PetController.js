import pool from '../config/db.js'

class PetController {

   constructor(){}

   async list (req, res) {
      try {
         const petList = await pool.query('SELECT * FROM tb_pets')
         return res.status(200).send(petList.rows)
      } catch (err) {
         console.log(err)
         return res.status(400).send(err)
      }
   }

   async findByName(req, res) {
      const { name } = req.params

      try {
         const petByName = await pool.query(`SELECT * FROM tb_pets WHERE name='${name}'`)
         return res.status(200).send(petByName.rows)
      } catch (err) {
         console.log(err)
         return res.status(400).send(err)
      }
   }

   async create(req, res) {
      const { name, age, image_url } = req.body

      try {
         const newPet = await pool.query(`INSERT INTO tb_pets (name, age, image_url) VALUES ('${name}', '${age}', '${image_url}') RETURNING *`)
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
         const updatedPet = await pool.query(`UPDATE tb_pets SET name='${name}', age='${age}', image_url='${image_url}' WHERE pet_id=${id} RETURNING *`)
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
         const updatedPet = await pool.query(`UPDATE tb_pets SET image_url='${image_url}' WHERE pet_id=${id} RETURNING *`)
         return res.status(200).send(updatedPet.rows)
      } catch (err) {
         console.log(err)
         return res.status(400).send(err)
      }
   }

   async delete(req, res) {
      const { id } = req.params

      try {
         const deletedPet = await pool.query(`DELETE FROM tb_pets WHERE pet_id=${id}`)
         return res.status(200).send(deletedPet.rows)
      } catch (err) {
         console.log(err)
         return res.status(400).send(err)
      }
   }
}


export default PetController