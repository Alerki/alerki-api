/**
 * Set environment variable
 *
 * Checks:
 * - if variable is not empty
 * - parse to specified type (by default string)
 *
 * @param variableName variable name in environment
 * @param type parse to type
 * @returns prepared and checked value
 */
export function SetEnvVariable(
  variableName: string,
  type: 'string' | 'number' = 'string',
  required: boolean = false,
): PropertyDecorator {
  return (target: Record<string, any>, key: string | symbol) => {
    const variable = process.env[variableName];

    if (!variable && required) {
      throw new Error(
        `${variableName} not exists, please set it in the .env file`,
      );
    }

    let prepared: string | number | any;

    switch (type) {
      case 'string':
        prepared = variable;
        break;

      case 'number':
        prepared = Number(variable);

        if (isNaN(prepared)) {
          throw new Error(
          // eslint-disable-next-line max-len
            `Env variable \`${variableName}\` is not a number, but we got value: ${variable}, type: ${typeof variable}`,
          );
        }

        break;

      default:
        throw new Error(`SetEnvVariable unhandled type \`${type}\``);
    }

    target[key as string] = prepared;
  };
}
