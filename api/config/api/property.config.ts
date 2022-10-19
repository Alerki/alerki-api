export interface PropertyConfig {
  description: string,
  minLength?: number,
  maxLength?: number,
  minimum?: number,
  maximum?: number,
  type: 'string' | 'number' | 'Buffer' | 'boolean',
  example?: string | number | any,
  pattern?: string,
  patternExp?: RegExp,
}

export interface PropertiesConfig { [key: string]: PropertyConfig }

export namespace General {
  export const intMaxValue = 2147483647;

  export const UUIDExample = 'f7b1cb86-5f8f-4aac-9838-b51ffbfa22c6';

  export const minLatitudeValue = -90;

  export const maxLatitudeValue = 90;

  export const minLongitudeValue = -180;

  export const maxLongitudeValue = 180;

  export const config: PropertiesConfig = {
    uuid: {
      description: 'UUID',
      type: 'string',
      example: 'f7b1cb86-5f8f-4aac-9838-b51ffbfa22c6',
    },
  };
}

export namespace User {
  /* eslint-disable-next-line max-len */
  export const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  export const usernamePattern = /^[a-zA-Z_\-0-9]+$/;

  export const availablePictureExtensions = /(jpg|jpeg|png|heif)$/;

  export const config: PropertiesConfig = {
    email: {
      description: 'Email',
      minLength: 5,
      maxLength: 319,
      type: 'string',
      example: 'james@gmail.com',
      pattern: String(emailPattern),
      patternExp: emailPattern,
    },
    username: {
      description: 'Username',
      minLength: 4,
      maxLength: 20,
      type: 'string',
      example: 'james',
      patternExp: usernamePattern,
    },
    firstName: {
      description: 'First name',
      maxLength: 30,
      type: 'string',
      example: 'James',
    },
    lastName: {
      description: 'Last name',
      maxLength: 30,
      type: 'string',
      example: 'Smith',
    },
    password: {
      description: 'Password',
      minLength: 6,
      maxLength: 50,
      type: 'string',
      example: 'dIda*20/fa',
    },
    picture: {
      description: 'User picture',
      type: 'Buffer',
      pattern: String(availablePictureExtensions),
      patternExp: availablePictureExtensions,
    },
    phoneNumber: {
      description: 'Phone number',
      minLength: 8,
      maxLength: 20,
      type: 'string',
      example: '+38 (098) 088 86 55',
    },
    deviceName: {
      description: 'Device name',
      minLength: 1,
      maxLength: 20,
      type: 'string',
      example: 'iPhone XR',
    },
  };
}

export namespace Service {
  export const config: PropertiesConfig = {
    available: {
      description: 'Available condition',
      type: 'boolean',
      example: false,
    },
    name: {
      description: 'Service name',
      minLength: 1,
      maxLength: 20,
      type: 'string',
      example: 'Haircut',
    },
  };
}

export namespace MasterService {
  export const config: PropertiesConfig = {
    currency: {
      description: 'Payment currency',
      type: 'string',
      example: 'USD',
    },
    price: {
      description: 'Service price',
      type: 'number',
      minimum: 0,
      example: 15,
    },
    duration: {
      description: 'Service duration in seconds',
      type: 'number',
      minimum: 0,
      maximum: General.intMaxValue,
      example: 60 * 30,
    },
    locationLat: {
      description: 'Location latitude',
      minimum: General.minLatitudeValue,
      maximum: General.maxLatitudeValue,
      type: 'number',
    },
    locationLng: {
      description: 'Location longitude',
      minimum: General.minLongitudeValue,
      maximum: General.maxLongitudeValue,
      type: 'number',
    },
  };
}

export namespace MasterWeekSchedule {
  const generateWeekDaySchedule = (dayName: string): PropertyConfig => ({
    description: `${dayName} is weekend or not`,
    type: 'boolean',
    example: true,
  });

  export const config: PropertiesConfig = {
    monday: generateWeekDaySchedule('Monday'),
    tuesday: generateWeekDaySchedule('Tuesday'),
    wednesday: generateWeekDaySchedule('Wednesday'),
    thursday: generateWeekDaySchedule('Thursday'),
    friday: generateWeekDaySchedule('Friday'),
    saturday: generateWeekDaySchedule('Saturday'),
    sunday: generateWeekDaySchedule('Sunday'),
  };
}
