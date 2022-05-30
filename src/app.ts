import dotenv from 'dotenv'
import { router } from './routes'

dotenv.config()

import express from 'express'
import { errorHandler } from './errors/error-handler'

const app = express()

app.use(express.json())

app.use(router)
app.use(errorHandler)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log('started!'))