import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import routes from './routes'

require('dotenv').config()

class App {

    public express: express.Application

    public constructor () {
        this.express = express()
        this.middlewares()
        this.database()
        this.routes()
    }

    private middlewares (): void {
        this.express.use(express.json())
        this.express.use(express.urlencoded({ extended: true }))
        this.express.use(cors())
    }

    private database (): void {
        // mongodb+srv://admin:hiBnZths5sAjOBkc@cluster0-mtbmv.mongodb.net/test?retryWrites=true&w=majority
        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }

    private routes (): void {
        this.express.use(routes)
    }
}

export default new App().express
