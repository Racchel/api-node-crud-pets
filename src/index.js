import express from 'express'
import rootRoute from './routes/index.js'
import petRoutes from './routes/PetRoutes.js'

const app = express()
const PORT = 3333

app.use(express.json())

app.get('/', rootRoute)
app.use('/pets', petRoutes)

app.listen(PORT, () => {
   console.log(`App is running on port ${PORT}`)
})