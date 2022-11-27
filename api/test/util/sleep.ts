/**
 * Sleep promise
 *
 * @param ms delay in milliseconds
 * @returns sleep promise
 */
export const sleep = (ms: number) => {
  return new Promise((res) => {
    setTimeout(() => res(undefined), ms);
  });
};
