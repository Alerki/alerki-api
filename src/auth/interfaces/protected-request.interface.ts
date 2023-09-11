import type { Request } from 'express';

import { IJwtTokenData } from './jwt-token.interface';

export interface ProtectedRequest extends Request {
  user: IJwtTokenData;
}
