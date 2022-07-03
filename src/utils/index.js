export const isFalsy = (value) => (value === 0 ? false : !value);
export const cleanParams = (obj) => {
  const result = {};
  Object.keys(obj).forEach((key) => {
    if (!isFalsy(obj[key])) {
      result[key] = obj[key];
    }
  });
  return result;
};
