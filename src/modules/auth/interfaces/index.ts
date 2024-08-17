import type { Request } from 'express';

export interface JWTData {
  id: string;
}

export interface ProtectedRequest extends Request {
  user: JWTData;
}
