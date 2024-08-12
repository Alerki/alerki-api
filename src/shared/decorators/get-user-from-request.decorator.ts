import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { JWTData } from '../../modules/auth/auth.interface';
import { ProtectedRequest } from '../../modules/auth/interfaces';

export const GetUserFromRequest = createParamDecorator(
  <T extends string | string[]>(_: unknown, ctx: ExecutionContext): JWTData => {
    const request: ProtectedRequest = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
