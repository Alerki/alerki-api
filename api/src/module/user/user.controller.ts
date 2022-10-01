import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Req,
  UseGuards,
  UseInterceptors ,
} from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';

import { UserService } from '@Module/user/user.service';
import { JwtAuthGuard } from '@Module/auth/jwt-auth.guard';
import { ProtectedRequest } from '@Module/auth/interface/protected-request.interface';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  /**
   * Get own user profile
   *
   * @param req request
   * @returns
   */
  @ApiOperation({ description: 'Get own user profile' })
  @ApiOkResponse({ description: 'Profile received successfully' })
  @ApiNotFoundResponse({ description: 'User profile not found' })
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JwtAuthGuard)
  @Get('')
  async getProtectedUser(
    @Req() req: ProtectedRequest,
  ) {
    const { id } = req.user;

    const profile = await this.userService.getUser({ id });

    return profile;
  }

  /**
   * Get user profile
   *
   * @param username profile username
   * @returns user profile
   */
  @ApiOperation({ description: 'Get user profile' })
  @ApiOkResponse({ description: 'Profile received successfully' })
  @ApiNotFoundResponse({ description: 'User profile not found' })
  @ApiParam({ name: 'username', description: 'Profile username' })
  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':username')
  async getUser(
    @Param('username') username: string,
  ) {
    const profile = await this.userService.getUser({ username });

    return profile;
  }
}
