import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const DeviceName = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();

    if (!req.headers?.['user-agent']) {
      return 'undefined';
    }

    const deviceName = req.headers['user-agent']?.match(/\(([^)]+)\)/);

    if (deviceName?.length > 1) {
      return deviceName[0].toUpperCase() + deviceName.slice(1);
    }

    return 'undefined';
  },
);
