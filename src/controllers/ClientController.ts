import { Request, Response } from 'express'

import Client from '../schemas/Client'

class ClientController {

    public async index(_: Request, res: Response): Promise<Response> {
        const clients = await Client.find()

        return res.json(clients)
    }

    public async store(req: Request, res: Response): Promise<Response> {
        try {
            await Client.create(req.body);
            return res.status(201).json("Cadastrado com sucesso!")
        } catch (e) {
            return res.status(400).json("Ocorreu um erro!!");
        }
    }

}

export default new ClientController()
