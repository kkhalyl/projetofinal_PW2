import {Request, Response, NextFunction} from 'express';

const createLangCookie = (req: Request, res: Response, next: NextFunction) => {
    if (!('lang' in req.cookies)) {
        res.cookie('lang', 'pt-BR');
        next()
    }
}

export default createLangCookie