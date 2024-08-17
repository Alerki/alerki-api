import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

import { JWTData } from '../../modules/auth/interfaces';
import { ContextType } from '../interfaces';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';

export const GetUserFromRequest = createParamDecorator(
  <T extends string | string[]>(
    _: unknown,
    context: ExecutionContext,
  ): JWTData => {
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

    return request.req.user;
  },
);