/* eslint-disable no-unused-vars */
const voidFunc = () => {
  console.log('');
};

const voidFuncWithParams = (params: any) => {
  console.log('');
};

export type voidFunction = typeof voidFunc | typeof voidFuncWithParams;
