// List of characters to generate random string
const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

/**
 * Generate random string
 *
 * @param length random string length
 * @returns random string
 */
export function randomString(length: number, charactersOverride?: string) {
  let result = '';
  let charactersLength: number;

  // Generate UUID with user's characters
  if (charactersOverride) {
    charactersLength = charactersOverride.length;

    for (let i = 0; i < length; i++) {
      result += charactersOverride.charAt(
        Math.floor(Math.random() * charactersLength),
      );
    }
  } else {
    // Generate UUID with default characters
    charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  }

  return result;
}
