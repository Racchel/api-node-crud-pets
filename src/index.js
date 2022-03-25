import express from 'express'
import rootRoute from './routes/index.js'
import petRoutes from './routes/PetRoutes.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3333

app.use(express.json())
app.use(cors())

app.get('/', rootRoute)
app.use('/pets', petRoutes)

app.listen(PORT, () => {
   console.log(`App is running on port ${PORT}`)
})