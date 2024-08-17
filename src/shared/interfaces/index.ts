import { JWTData } from '../../modules/auth/interfaces';

export type ContextType = {
  req: Request & { user: JWTData; accessToken: string };
};
