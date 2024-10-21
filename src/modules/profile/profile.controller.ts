import {
  BadRequestException,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { type Response } from 'express';

import { GetUserFromRequest } from '../../shared/decorators/get-user-from-request.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { JWTData } from '../auth/interfaces';
import { ProfileControllerService } from './profile.controller.service';

@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
  constructor(
    private readonly profileControllerService: ProfileControllerService,
  ) {}

  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        picture: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('picture', {
      fileFilter: (req, file, callback) => {
        const allowedMimeTypes = [
          'image/jpeg',
          'image/png',
          'image/heif',
          'image/heic',
        ];
        if (allowedMimeTypes.includes(file.mimetype)) {
          callback(null, true); // Accept the fileK
        } else {
          callback(new BadRequestException('Invalid file type.'), false); // Reject the file
        }
      },
    }),
  )
  @ApiBearerAuth('Bearer')
  @UseGuards(JwtAuthGuard)
  @Post('picture')
  async updateProfilePicture(
    @UploadedFile()
    file: Express.Multer.File,
    @GetUserFromRequest()
    user: JWTData,
  ) {
    return this.profileControllerService.updateProfilePicture(user.id, file);
  }

  @Get('picture/:pictureName')
  async getProfilePicture(
    @Param('pictureName') pictureName: string,
    @Res() res: Response,
  ) {
    const picture =
      await this.profileControllerService.getProfilePicture(pictureName);
    picture.pipe(res);
  }

  @ApiBearerAuth('Bearer')
  @UseGuards(JwtAuthGuard)
  @Delete('picture')
  async deleteProfilePicture(
    @GetUserFromRequest()
    user: JWTData,
  ) {
    return this.profileControllerService.deleteProfilePicture(user.id);
  }
}
