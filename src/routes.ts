import { Router } from 'express'

import ClientController from './controllers/ClientController'

const routes =  Router()

routes.get('/clients', ClientController.index)
routes.post('/clients/create', ClientController.store)

export default routes