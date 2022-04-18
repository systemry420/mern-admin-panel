import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.get('/', (request: Request, response: Response) => {
    response.send('Hello from server')
})

app.listen(8000, () => {
    console.log('listening to port 8000');
    
})