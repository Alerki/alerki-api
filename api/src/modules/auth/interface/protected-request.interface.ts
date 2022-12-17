import { Request } from 'express';

export interface ProtectedRequest extends Request {
  user: {
    id: string,
  },
}
