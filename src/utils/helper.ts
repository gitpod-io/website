export const isEurope = () => {
  const offset = new Date().getTimezoneOffset();
  return offset <= 0 && offset >= -180;
};

export const hyphenate = (str: string = "") =>
  str.toLocaleLowerCase().replace(/\s/g, "-");
