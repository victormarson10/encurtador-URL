import express, { Request, Response} from 'express';
import { UrlControler } from './Controler/UrlControler';
import { MongoConnection } from './database/MongoConnection';

const api = express()
api.use(express.json())

const database = new MongoConnection()
database.connect()

const urlControler = new UrlControler()
api.post('/shorten', urlControler.shorten)
api.get('/hash', urlControler.shorten)

// api.use('/test', (req: Request, res: Response) => {
//     res.json({ sucess: true})
// })

api.listen(5000, () => console.log('Exoress listening')) 