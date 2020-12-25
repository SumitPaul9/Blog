import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

import createError from 'http-errors';

export const signAccessToken = (user) => {
    return new Promise((resolve, reject) => {
        const payload = {
            userId : user.id
        }
        const secret = process.env.ACCESS_TOKEN_SECRET;
        const options = {
            expiresIn: "1h",
            audience: user.id
        }

        JWT.sign(payload, secret, options, (err, token) => {
            if (err) {
                reject(createError.InternalServerError());
            }
            resolve(token);
        })
    })
}

export const verifyAccessToken = (req, res, next) => {
    if (!req.headers['authorization']) return next(createError.Unauthorized());
    const authHeader = req.headers['authorization'];
    const bearerToken = authHeader.split(' ');
    const token = bearerToken[1];

    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if (err) {
            if (err.name === 'JsonWebTokenError') {
                return next(createError.Unauthorized());
            } else {
                return next(createError.Unauthorized(err.message));
            }
        }      
        req.payload = payload;
        next();
    })
}



