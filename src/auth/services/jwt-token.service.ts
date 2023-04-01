import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { ENV } from '../../config';
import { IJwtTokenData, IPairTokens } from '../interfaces';

@Injectable()
export class JwtTokenService {
  jwtAccessTokenSecret: string;
  jwtRefreshTokenSecret: string;
  jwtAccessTokenExpiresIn: string;
  jwtRefreshTokenExpiresIn: string;

  constructor(private readonly jwtService: JwtService) {
    this.jwtAccessTokenSecret = ENV.JWT_ACCESS_TOKEN_SECRET;
    this.jwtAccessTokenExpiresIn = ENV.JWT_ACCESS_TOKEN_EXPIRES_IN;
    this.jwtRefreshTokenSecret = ENV.JWT_ACCESS_TOKEN_SECRET;
    this.jwtRefreshTokenExpiresIn = ENV.JWT_REFRESH_TOKEN_EXPIRES_IN;
  }

  async generateAccessToken(data: IJwtTokenData) {
    return this.jwtService.sign(data, {
      secret: this.jwtAccessTokenSecret,
      expiresIn: this.jwtAccessTokenExpiresIn,
    });
  }

  async generateRefreshToken(data: IJwtTokenData) {
    return this.jwtService.sign(data, {
      secret: this.jwtRefreshTokenSecret,
      expiresIn: this.jwtRefreshTokenExpiresIn,
    });
  }

  async generatePairTokens(data: IJwtTokenData): Promise<IPairTokens> {
    return {
      accessToken: await this.generateAccessToken(data),
      refreshToken: await this.generateRefreshToken(data),
    };
  }

  async validateAccessToken(accessToken: string) {
    return this.jwtService.verify<IJwtTokenData>(accessToken, {
      secret: this.jwtAccessTokenSecret,
    });
  }

  async validateRefreshToken(refreshToken: string) {
    return this.jwtService.verify<IJwtTokenData>(refreshToken, {
      secret: this.jwtRefreshTokenExpiresIn,
    });
  }
}
