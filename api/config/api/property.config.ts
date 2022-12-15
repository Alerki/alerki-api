import { ApiPropertyOptions } from '@nestjs/swagger';

export enum PropertyType {
  string = 'string',
  number = 'number',
  Buffer = 'Buffer',
  boolean = 'boolean',
  DateTime = 'DateTime',
  Date = 'Date',
}

interface ExtendedApiPropertyOptions extends ApiPropertyOptions {
  patternExp?: RegExp;
  type: PropertyType;
}

export interface PropertiesConfig { [key: string]: ExtendedApiPropertyOptions }

export namespace GeneralConfig {
  export const intMaxValue = 2147483647;

  export const UUIDExample = 'f7b1cb86-5f8f-4aac-9838-b51ffbfa22c6';

  export const UUIDPatter = /^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/;

  // eslint-disable-next-line max-len
  export const jwtTokenExample = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

  export const jwtTokenPattern = /^\w+.\w+.\w+$/;

  export const minLatitudeValue = -90;

  export const maxLatitudeValue = 90;

  export const minLongitudeValue = -180;

  export const maxLongitudeValue = 180;

  export const config = {
    uuid: {
      description: 'UUID',
      type: PropertyType.string,
      example: 'f7b1cb86-5f8f-4aac-9838-b51ffbfa22c6',
      pattern: String(UUIDPatter),
      patternExp: UUIDPatter,
    } satisfies ExtendedApiPropertyOptions,
    refreshToken: {
      description: 'Refresh token',
      type: PropertyType.string,
      example: jwtTokenExample,
      pattern: String(jwtTokenPattern),
      patternExp: jwtTokenPattern,
      maxLength: 1024,
    } satisfies ExtendedApiPropertyOptions,
  } satisfies PropertiesConfig;
}

export namespace UserConfig {
  /* eslint-disable-next-line max-len */
  export const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  export const usernamePattern = /^[a-zA-Z_\-0-9]+$/;

  export const availablePictureExtensions = /(jpg|jpeg|png|heif)$/;

  export const config = {
    email: {
      description: 'Email',
      minLength: 5,
      maxLength: 319,
      type: PropertyType.string,
      example: 'james@gmail.com',
      pattern: String(emailPattern),
      patternExp: emailPattern,
    } satisfies ExtendedApiPropertyOptions,
    username: {
      description: 'Username',
      minLength: 4,
      maxLength: 20,
      type: PropertyType.string,
      example: 'james',
      patternExp: usernamePattern,
    } satisfies ExtendedApiPropertyOptions,
    firstName: {
      description: 'First name',
      maxLength: 30,
      type: PropertyType.string,
      example: 'James',
    } satisfies ExtendedApiPropertyOptions,
    lastName: {
      description: 'Last name',
      maxLength: 30,
      type: PropertyType.string,
      example: 'Smith',
    } satisfies ExtendedApiPropertyOptions,
    password: {
      description: 'Password',
      minLength: 6,
      maxLength: 50,
      type: PropertyType.string,
      example: 'dIda*20/fa',
    } satisfies ExtendedApiPropertyOptions,
    picture: {
      description: 'User picture',
      type: PropertyType.Buffer,
      pattern: String(availablePictureExtensions),
      patternExp: availablePictureExtensions,
    } satisfies ExtendedApiPropertyOptions,
    phoneNumber: {
      description: 'Phone number',
      minLength: 8,
      maxLength: 20,
      type: PropertyType.string,
      example: '+38 (098) 088 86 55',
    } satisfies ExtendedApiPropertyOptions,
    deviceName: {
      description: 'Device name',
      minLength: 1,
      maxLength: 20,
      type: PropertyType.string,
      example: 'iPhone XR',
    } satisfies ExtendedApiPropertyOptions,
  } satisfies PropertiesConfig;
}

export namespace ServiceConfig {
  export const config = {
    available: {
      description: 'Available condition',
      type: PropertyType.boolean,
      example: false,
    } satisfies ExtendedApiPropertyOptions,
    name: {
      description: 'Service name',
      minLength: 1,
      maxLength: 30,
      type: PropertyType.string,
      example: 'Haircut',
    } satisfies ExtendedApiPropertyOptions,
  } satisfies PropertiesConfig;
}

export namespace MasterServiceConfig {
  export const config = {
    currency: {
      description: 'Payment currency',
      type: PropertyType.string,
      example: 'USD',
    } satisfies ExtendedApiPropertyOptions,
    price: {
      description: 'Service price',
      type: PropertyType.number,
      minimum: 0,
      example: 15,
    } satisfies ExtendedApiPropertyOptions,
    duration: {
      description: 'Service duration in seconds',
      type: PropertyType.number,
      minimum: 0,
      maximum: GeneralConfig.intMaxValue,
      example: 60 * 30,
    } satisfies ExtendedApiPropertyOptions,
    locationLat: {
      description: 'Location latitude',
      minimum: GeneralConfig.minLatitudeValue,
      maximum: GeneralConfig.maxLatitudeValue,
      type: PropertyType.number,
    } satisfies ExtendedApiPropertyOptions,
    locationLng: {
      description: 'Location longitude',
      minimum: GeneralConfig.minLongitudeValue,
      maximum: GeneralConfig.maxLongitudeValue,
      type: PropertyType.number,
    } satisfies ExtendedApiPropertyOptions,
  } satisfies PropertiesConfig;
}

export namespace MasterWeeklyScheduleConfig {
  export const generateWeekDaySchedule =
    (dayName: string): ExtendedApiPropertyOptions => ({
      description: `${dayName} is weekend or not`,
      type: PropertyType.boolean,
      example: true,
    } satisfies ExtendedApiPropertyOptions);

  export const generateTime =
    (
      description: string,
      example: number,
      minimum: number = 0,
    ): ExtendedApiPropertyOptions =>
      ({
        minimum,
        maximum: 86399999,
        description,
        type: PropertyType.number,
        example,
      } satisfies ExtendedApiPropertyOptions);

  export const startTime = generateTime('Start work time', 9 * 60 * 1000);
  export const endTime = generateTime('End work time', 17 * 60 * 1000);
  export const timezoneOffset = generateTime(
    'Timezone offset',
    2 * 60 * 1000,
    -24 * 60 * 1000 - 1,
  );

  export const config = {
    monday: generateWeekDaySchedule('Monday'),
    tuesday: generateWeekDaySchedule('Tuesday'),
    wednesday: generateWeekDaySchedule('Wednesday'),
    thursday: generateWeekDaySchedule('Thursday'),
    friday: generateWeekDaySchedule('Friday'),
    saturday: generateWeekDaySchedule('Saturday'),
    sunday: generateWeekDaySchedule('Sunday'),
    startTime: startTime,
    endTime: endTime,
    timezoneOffset: timezoneOffset,
  } satisfies PropertiesConfig;
}

export namespace MasterScheduleConfig {
  export const config = {
    startTime: MasterWeeklyScheduleConfig.startTime,
    endTime: MasterWeeklyScheduleConfig.endTime,
    timezoneOffset: MasterWeeklyScheduleConfig.timezoneOffset,
    data: {
      description: 'Schedule date',
      type: PropertyType.Date,
      example: '2022-11-26T00:00:00.000Z',
    } satisfies ExtendedApiPropertyOptions,
    dayOff: {
      description: 'It\'s a day off',
      type: PropertyType.boolean,
      example: false,
    } satisfies ExtendedApiPropertyOptions,
  } satisfies PropertiesConfig;
}
