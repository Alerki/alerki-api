export function isAsync(func: Function) {
  return func.constructor.name === 'AsyncFunction';
}
