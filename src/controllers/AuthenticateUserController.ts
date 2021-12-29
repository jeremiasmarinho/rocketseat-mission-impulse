import { Request, Response } from "express";
import { AutheticateUserService } from "../services/AuthenticateUserService";
class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { code } = request.body;

    const service = new AutheticateUserService();
    const result = await service.execute(code);
  
    return response.json(result);
  }
}

export { AuthenticateUserController };