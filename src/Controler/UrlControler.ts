import { Request, response, Response } from "express";
import { config } from "../config/Constants";
import shortid from 'shortid';
import { URLModel } from "../database/model/URL";

export class UrlControler {
    public async shorten(req: Request, res: Response): Promise<void> {


        const { originURL } = req.body
        const url = await URLModel.findOnde({ originURL })
        if (url) {
            response.json(url)
            return
        }

        const hash = shortid.generate()
        const shortURL = `${config.API_URL}/${hash}`
        const newURL = await URLModel.create({ hash, shortURL, originURL })
        response.json(newURL)

    }

    public async redirect(req: Request, res: Response): Promise<void> {

        const {hash} = req.params
        const url = await URLModel.findOnde({ hash })

        if (url) {
            res.redirect(url.originURL)   
            return
        }
        response.status(400).json({ error: 'URL not found'})
    }
}