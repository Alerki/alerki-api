import type { Request } from 'express';

import { JWTData } from '../auth.interface';

export interface ProtectedRequest extends Request {
  user: JWTData;
}
