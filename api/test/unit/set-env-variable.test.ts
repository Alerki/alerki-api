import { SetEnvVariable } from '@Shared/decorators/set-env-variable.decorator';

describe('SetEnvVariable testing', () => {
  test('should set variable as string', () => {
    process.env.XClass = 'XClass_string';

    class X {
      @SetEnvVariable('XClass', 'string') x: number;
    }

    const x = new X();

    expect(x.x).toBe(process.env.XClass);
  });

  test('should set variable as default type', () => {
    process.env.XClass = 'XClass_string';

    class X {
      @SetEnvVariable('XClass') x: number;
    }

    const x = new X();

    expect(x.x).toBe(process.env.XClass);
  });

  test('should set variable as number', () => {
    process.env.XClass = '57193';

    class X {
      @SetEnvVariable('XClass', 'number') x: number;
    }

    const x = new X();

    expect(x.x).toBe(Number(process.env.XClass));
  });

  test('should throw error when try to set string as number', () => {
    expect(() => {
      process.env.XClass = 'abcd';

      class Z {
        @SetEnvVariable('XClass', 'number') y: number;
      }

      new Z();
    }).toThrow(
      // eslint-disable-next-line max-len
      'Env variable `XClass` is not a number, but we got value: abcd, type: string',
    );
  });

  test('should throw error when try to set undefined variable', () => {
    expect(() => {
      class Z {
        @SetEnvVariable('YClass', 'number', true) y: number;
      }

      new Z();
    }).toThrow('YClass not exists, please set it in the .env file');
  });

  test('should throw error when try to set undefined SetAs type', () => {
    expect(() => {
      process.env.XClass = 'XClass_value';

      class Z {
        // @ts-ignore
        @SetEnvVariable('XClass', 'NewOne') y: number;
      }

      new Z();
    }).toThrow('SetEnvVariable unhandled type `NewOne`');
  });
});
