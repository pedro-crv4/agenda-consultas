import { NextFunction, Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken';

export const SECRET_KEY = process.env.SECRET_KEY;

export function verifyToken(request: Request, response: Response, next: NextFunction) {
    if (request.originalUrl === '/login') {
        next();
        return;
    }

    const token = request.headers.authorization;

    if (!token) {
        return response.status(401).send("Nenhum token informado");
    }

    jsonwebtoken.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return response.status(401).json({ message: 'Token inválido' });
        }

        request.user = decoded.sub;
        next();
    });
}