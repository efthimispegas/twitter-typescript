export const trimStr = (str: string, length: number, endPoint: number) => {
  return str.length > length ? `${str.substr(0, endPoint)}...` : str;
};
