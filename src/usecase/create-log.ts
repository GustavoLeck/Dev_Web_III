import { LogDb } from "../infrastructure/db/log-db";
import { Response } from "../interface/response-interface";

export class CreateLog {
  async execute(value: Response): Promise<Response> {
    return await new LogDb().create(value);
  }
}
