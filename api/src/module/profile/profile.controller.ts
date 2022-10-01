import {
  Controller,
  Get,
  Param,
  ClassSerializerInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

import { ProfileService } from '@Module/profile/profile.service';

@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
  constructor(
    private profileService: ProfileService,
  ) {}

  /**
   * Get profile
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
  async getProfile(
    @Param('username') username: string,
  ) {
    const profile = await this.profileService.getProfile({ username });

    return profile;
  }
}
