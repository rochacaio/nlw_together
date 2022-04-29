import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Ipayload{
    sub:string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    const authToken = request.headers.authorization;

    if(!authToken){
        return response.status(401).end();
    }
    const [,token] = authToken.split(" ");

    try {
        const { sub } = verify(token,"09e4b7db28fab868fa716753eea45218") as Ipayload;
        request.user_id = sub;
        return next();
    }catch (err){
        return response.status(401).end();
    }
}