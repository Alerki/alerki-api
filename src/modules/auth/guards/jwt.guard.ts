import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import type { Request } from 'express';

import { JwtInternalService } from '../service/internal-jwt.service';

export function extractTokenFromHeader(request: Request): string | undefined {
  const [type, token] = request.headers.authorization?.split(' ') ?? [];
  return type === 'Bearer' ? token : undefined;
}

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtInternalService: JwtInternalService) {}

  async canActivate(context: ExecutionContext) {
    let request: any | undefined;

    if (context.getType() === 'http') {
      request = context.switchToHttp().getRequest();
    } else if (context.getType<GqlContextType>() === 'graphql') {
      context = GqlExecutionContext.create(context);
      request = context.switchToHttp().getNext().req;
    }

    if (!request) {
      throw new UnauthorizedException();
    }

    const token = extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }

    const validatedToken =
      await this.jwtInternalService.validateAccessToken(token);
    if (!validatedToken) {
      throw new UnauthorizedException();
    }

    request.user = validatedToken;

    return true;
  }
}
