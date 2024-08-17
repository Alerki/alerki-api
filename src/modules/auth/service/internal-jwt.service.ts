import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ENV } from 'src/modules/config';
import { JWTData } from '../interfaces';

@Injectable()
export class JwtInternalService {
  private readonly jwtAccessTokenSecret: string;
  private readonly jwtRefreshTokenSecret: string;
  private readonly jwtAccessTokenExpiresIn: string;
  private readonly jwtRefreshTokenExpiresIn: string;

  constructor(private readonly jwtService: JwtService) {
    this.jwtAccessTokenSecret = ENV.JWT_ACCESS_TOKEN_SECRET;
    this.jwtAccessTokenExpiresIn = ENV.JWT_ACCESS_TOKEN_EXPIRES_IN;
    this.jwtRefreshTokenSecret = ENV.JWT_REFRESH_TOKEN_SECRET;
    this.jwtRefreshTokenExpiresIn = ENV.JWT_REFRESH_TOKEN_EXPIRES_IN;
  }

  async generateAccessToken(data: JWTData) {
    return this.jwtService.sign(data, {
      secret: this.jwtAccessTokenSecret,
      expiresIn: this.jwtAccessTokenExpiresIn,
    });
  }

  async generateRefreshToken(data: JWTData) {
    return this.jwtService.sign(data, {
      secret: this.jwtRefreshTokenSecret,
      expiresIn: this.jwtRefreshTokenExpiresIn,
    });
  }

  async generatePairTokens(data: JWTData) {
    return {
      accessToken: await this.generateAccessToken(data),
      refreshToken: await this.generateRefreshToken(data),
    };
  }

  async validateAccessToken(accessToken: string) {
    try {
      return this.jwtService.verify<JWTData>(accessToken, {
        secret: this.jwtAccessTokenSecret,
      });
    } catch (e) {
      return;
    }
  }

  async validateRefreshToken(refreshToken: string) {
    try {
      return this.jwtService.verify<JWTData>(refreshToken, {
        secret: this.jwtRefreshTokenSecret,
      });
    } catch (e) {
      return;
    }
  }
}
