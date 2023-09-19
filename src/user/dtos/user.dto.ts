import { ApiProperty } from '@nestjs/swagger';

export class PatchUserPictureDto {
  @ApiProperty({ type: 'string', format: 'binary', required: true })
  picture: Express.Multer.File;
}
