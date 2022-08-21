import {Request, Response } from 'express'

import {Pet} from '../models/pet';
import { createMenuObjet } from '../helpers/createMenuObject';

export const search = (req: Request, res: Response) => {
    
    //Pegando os dados da url
    let query = req.query.q as string;

    if(!query){
        res.redirect('/');
        return;
    }

    // setando a informação que veio da url
    let list = Pet.getFromName(query);


    res.render('pages/page', {
        menu: createMenuObjet(''),
        list,
        query
    })
}