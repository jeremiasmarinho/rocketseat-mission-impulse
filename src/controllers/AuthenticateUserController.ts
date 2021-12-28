import {Request, Response} from "express";
import { AutheticateUserService } from "../services/AuthenticateUserService";


class AuthenticateUserController {
  async handle(request: Request, response:Response) {

    const service = new AutheticateUserService();

  }
}

export {AuthenticateUserController};