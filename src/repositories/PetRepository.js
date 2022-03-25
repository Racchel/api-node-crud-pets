import pool from '../config/db.js'

export default class PetRepository {

   constructor(){}

   async list () {
      return await pool.query('SELECT * FROM tb_pets')
   }

   async findById(id) {
      return await pool.query(`SELECT * FROM tb_pets WHERE pet_id=${id}`)
   }

   async findByName(name) {
      return await pool.query(`SELECT * FROM tb_pets WHERE name='${name}'`)
   }

   async create(name, age, image_url) {
      return await pool.query(`INSERT INTO tb_pets (name, age, image_url) VALUES ('${name}', '${age}', '${image_url}') RETURNING *`)
   }

   async update(id, name, age, image_url) {
      return await pool.query(`UPDATE tb_pets SET name='${name}', age='${age}', image_url='${image_url}' WHERE pet_id=${id} RETURNING *`)
   }

   async updateImage(id, image_url) {
      return await pool.query(`UPDATE tb_pets SET image_url='${image_url}' WHERE pet_id=${id} RETURNING *`)
   }

   async delete(id) {
      return await pool.query(`DELETE FROM tb_pets WHERE pet_id=${id}`)
   }
}
