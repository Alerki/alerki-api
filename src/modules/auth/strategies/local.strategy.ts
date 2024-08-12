import { BadRequestException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { AuthService } from '../service/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: ['email', 'email'],
    });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.processLogInRequest(email, password);
    if (!user) {
      throw new BadRequestException('Bad credentials');
    }
    return user;
  }
}
