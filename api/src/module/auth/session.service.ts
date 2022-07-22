import { Injectable } from '@nestjs/common';
import { Session } from '@prisma/client';

import { PrismaService } from '@Shared/services/prisma.service';

/**
 * Session interface
 */
export interface ISession extends Pick<
  Session,
  'userId' |
  'ip' |
  'deviceName' |
  'refreshToken' |
  'fingerprint'
> {}

/**
 * Session service
 */
@Injectable()
export class SessionService {
  constructor(
    private readonly prismaService: PrismaService,
  ) {}

  /**
   * Create session
   *
   * @param data session data
   * @returns session
   */
  async create(data: ISession) {
    return this.prismaService.session.create({ data });
  }

  /**
   * Create session if not exists or update
   *
   * @param data session data
   * @returns session
   */
  async createOrUpdate(data: ISession) {
    const candidate = await this.findUnique(data);

    if (!candidate) {
      return this.create(data);
    }

    return this.update(candidate.id, data);
  }

  /**
   * Delete session by ID
   *
   * @param id session ID to delete
   */
  async delete(id: string) {
    return this.prismaService.session.delete({
      where: {
        id,
      },
    });
  }

  /**
   * Find session by ID
   *
   * @param id session ID
   * @returns session
   */
  async findById(id: string) {
    return this.prismaService.session.findFirst({
      where: {
        id,
      },
    });
  }

  async findByUserIdAndToken(userId: string, refreshToken: string) {
    return this.prismaService.session.findFirst({
      where: {
        userId,
        refreshToken,
      },
    });
  }

  /**
   * Find all sessions by user ID
   *
   * @param userId user ID
   * @returns session
   */
  async findAllByUserId(userId: string) {
    return this.prismaService.session.findMany({
      where: {
        userId,
      },
    });
  }

  /**
   * Find unique session by:
   *
   * - ip
   * - userId
   * - fingerprint
   *
   * @param data session identification information
   * @returns
   */
  async findUnique(data: Pick<Session, 'userId' | 'fingerprint' | 'ip'>) {
    return this.prismaService.session.findFirst({
      where: {
        ip: data.ip,
        userId: data.userId,
        fingerprint: data.fingerprint,
      },
    });
  }

  /**
   * Update session by ID
   *
   * @param id session ID
   * @param data session data to update
   * @returns session
   */
  async update(id: string, data: ISession) {
    return this.prismaService.session.update({
      where: {
        id,
      },
      data,
    });
  }
}
