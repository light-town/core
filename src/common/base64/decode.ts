import * as forge from 'node-forge';

export const decode = (bytes: string): string => {
  return forge.util.decode64(bytes);
};

export default decode;
