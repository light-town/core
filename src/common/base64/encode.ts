import * as forge from 'node-forge';

export const encode = (bytes: string): string => {
  return forge.util.encode64(bytes);
};

export default encode;
