export default (ms: number) => {
  return new Promise((res) => {
    setTimeout(() => res(undefined), ms);
  });
};
