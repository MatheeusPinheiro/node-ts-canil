import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import exp from 'constants';
import mainRoutes from './routes/index';


dotenv.config();


const server =  express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());


server.use(express.static(path.join(__dirname, '../')))



/* ROTAS */

server.use(mainRoutes);

server.use((req:Request, res: Response)=>{
   res.status(404).render('pages/404') ;
});

/*PORTA */

server.listen(process.env.PORT);