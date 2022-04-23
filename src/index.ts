require('dotenv').config()

import express, { Request, Response } from 'express'
import cors from 'cors'
import { routes } from './routes'
import { createConnection, DataSource } from 'typeorm'
import cookieParser from 'cookie-parser'

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'mysqlmysql123',
    database: 'node_admin_db',
    entities: [
        'src/entity/*.ts'
    ],
    synchronize: true
})


AppDataSource.initialize()
.then(connection => {
    const app = express()

    app.use(express.json())

    app.use(cookieParser())
    
    app.use(cors({
        credentials: true,
        origin: 'http://localhost:3000'
    }))
    
    routes(app)
    
    app.listen(8000, () => {
        console.log('listening to port 8000');
        
    })
})