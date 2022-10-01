import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  UseInterceptors ,
} from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';

import { UserService } from '@Module/user/user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  /**
   * Get user profile
   *
   * @param username profile username
   * @returns user profile
   */
  @ApiOperation({ description: 'Get user profile' })
  @ApiOkResponse({ description: 'Profile received successfully' })
  @ApiNotFoundResponse({ description: 'User with not exists' })
  @ApiParam({ name: 'username', description: 'Profile username' })
  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':username')
  async getUserProfile(
    @Param('username') username: string,
  ) {
    const profile = await this.userService.getProfile({ username });

    return profile;
  }
}
