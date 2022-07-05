interface CleanObj {
  [key: string]: any;
}
export const isFalsy = (value: unknown) => (value === 0 ? false : !value);
export const cleanParams = (obj: CleanObj) => {
  const result: CleanObj = {};
  Object.keys(obj).forEach((key: keyof CleanObj) => {
    if (!isFalsy(obj[key])) {
      result[key] = obj[key];
    }
  });
  return result;
};
