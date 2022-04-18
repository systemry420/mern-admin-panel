import { Request, Response } from "express";

export const Register = (request: Request, response: Response) => {
    response.send(request.body)
}