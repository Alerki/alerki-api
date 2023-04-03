import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import type { Request } from 'express';

/**
 * Get header
 */
export const GetCookies = createParamDecorator(
  <T extends string>(
    data: T,
    ctx: ExecutionContext,
  ): string | unknown | undefined => {
    const request: Request = ctx.switchToHttp().getRequest();

    return request.headers?.[data];
  },
);

/**
 * Get authorization header
 */
export const GetAuthorizationHeader = createParamDecorator(
  <T extends string>(
    data: unknown,
    ctx: ExecutionContext,
  ): string | unknown | undefined => {
    const request: Request = ctx.switchToHttp().getRequest();

    const bearer = request.headers?.authorization;

    if (!bearer) {
      throw new BadRequestException('Authorization header is required');
    }

    return bearer.split(' ')[1];
  },
);
