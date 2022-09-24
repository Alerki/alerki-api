import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { AuthService } from '@Module/auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
  ) {
    super();
  }

  async validate(usernameOrEmail: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(usernameOrEmail, password);

    console.log(user);

    if (typeof user === 'string') {
      if (user === 'Bad password') {
        throw new BadRequestException(user);
      } else {
        throw new NotFoundException(user);
      }
    }

    return user;
  }
}
