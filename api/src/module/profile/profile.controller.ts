import {
  Controller,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { ProtectedRequest } from '@Module/auth/interface/protected-request.interface';
import { JwtAuthGuard } from '@Module/auth/jwt-auth.guard';
import { ProfileService } from '@Module/profile/profile.service';

/**
 * Profile controller
 */
@Controller('profile')
export class ProfileController {
  /**
   * Profile controller constructor
   *
   * @param profileService profile service
   */
  constructor(
    private readonly profileService: ProfileService,
  ) { }

  /**
   * Enable master
   *
   * @param req request
   */
  @ApiOperation({ description: 'Enable master profile' })
  @ApiHeader({ name: 'Authorization', required: true })
  @ApiOkResponse({ description: 'Successful enable master profile' })
  @ApiBadRequestResponse({ description: 'User is already master' })
  @ApiUnauthorizedResponse({ description: 'Bad access token' })
  @UseGuards(JwtAuthGuard)
  @Patch('enable-master')
  async enableMaster(
    @Req() req: ProtectedRequest,
  ) {
    // Get user ID
    const { user: { id } } = req;

    await this.profileService.enableMaster({ id });
  }

  /**
   * Disable master
   *
   * @param req request
   */
  @ApiOperation({ description: 'Disable master profile' })
  @ApiOkResponse({ description: 'Successful disable master profile' })
  @ApiUnauthorizedResponse({ description: 'Bad access token' })
  @UseGuards(JwtAuthGuard)
  @Patch('disable-master')
  async disableMaster(
    @Req() req: ProtectedRequest,
  ) {
    // Get user ID
    const { user: { id } } = req;

    await this.profileService.disableMaster({ id });
  }
}
