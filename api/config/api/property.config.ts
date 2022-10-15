export interface PropertyConfig {
  description: string,
  minLength?: number,
  maxLength?: number,
  type: 'string' | 'number' | 'Buffer',
  example?: string,
  pattern?: string,
  patternExp?: RegExp,
}

export interface PropertiesConfig { [key: string]: PropertyConfig }

export namespace General {
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
