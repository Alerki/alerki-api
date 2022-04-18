import Prisma from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

interface ISession extends Pick<Prisma.Session, 'deviceName' | 'userID' | 'createdAt' | 'updatedAt'> {}

export class SessionDto implements ISession {
  @ApiProperty({
    description: 'Device name',
    maxLength: 30,
    type: 'string',
    example: 'IPhone XR',
  })
  readonly deviceName: string;

  @ApiProperty({
    description: 'User ID',
    type: 'string',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  readonly userID: string;

  readonly createdAt: Date;

  readonly updatedAt: Date;
}