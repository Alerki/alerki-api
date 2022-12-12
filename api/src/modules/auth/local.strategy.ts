import { AuthService } from '@Src/modules/auth/auth.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
  ) {
    super();
  }

  async validate(usernameOrEmail: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(usernameOrEmail, password);

    if (typeof user === 'string') {
      if (user === 'Bad password') {
        throw new BadRequestException(user);
      } else {
        throw new BadRequestException(user);
      }
    }

    return user;
  }
}
