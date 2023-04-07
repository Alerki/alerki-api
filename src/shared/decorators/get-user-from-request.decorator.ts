import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { IJwtTokenData } from '../../auth/interfaces';
import { ProtectedRequest } from '../../auth/interfaces/protected-request.interface';

/**
 * Get cookies
 */
export const GetUserFromRequest = createParamDecorator(
  <T extends string | string[]>(
    _: unknown,
    ctx: ExecutionContext,
  ): IJwtTokenData => {
    const request: ProtectedRequest = ctx.switchToHttp().getRequest();

    return request.user;
  },
);
