import { randomString } from '@Test/util/random-string';

const charactersUUID = 'abcdef1234567890';

/**
 * Generate
 *
 * @returns random UUID
 */
export const randomUUID = () => {
  return randomString(8, charactersUUID) + '-' +
    randomString(4, charactersUUID) + '-' +
    randomString(4, charactersUUID) + '-' +
    randomString(4, charactersUUID) + '-' +
    randomString(12, charactersUUID);
};
