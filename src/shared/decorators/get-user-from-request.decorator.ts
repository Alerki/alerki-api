import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';

import { JWTData } from '../../modules/auth/interfaces';
import { ContextType } from '../interfaces';

export const GetUserFromRequest = createParamDecorator(
  // <T extends string | string[]>
  (_: unknown, context: ExecutionContext): JWTData => {
    let request: ContextType | undefined = undefined;

    if (context.getType() === 'http') {
      request = context.switchToHttp().getRequest();
    } else if (context.getType<GqlContextType>() === 'graphql') {
      context = GqlExecutionContext.create(context);
      request = context.switchToHttp().getNext();
    }

    if (!request) {
      throw new UnauthorizedException();
    }

    if (context.getType() === 'http') {
      return (request as any).user;
    } else if (context.getType<GqlContextType>() === 'graphql') {
      return request.req.user;
    }

    throw new UnauthorizedException();
  },
);
