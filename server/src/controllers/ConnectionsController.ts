import { Request, Response } from 'express';
import data from '../database/connection';

export default class ConecctionsController {
    async index(request: Request, response: Response) {
        const totalConnections = await data('connections').count('* as total');

        const { total } = totalConnections[0];

        return response.json({ total });
    }; 

    async create(request: Request, response: Response) {
        const { user_id } = request.body;

        await data('connections').insert({
            user_id,
        });

        return response.status(201).send();
    }; 
}