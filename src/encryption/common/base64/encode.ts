import * as forge from 'node-forge';

export default function encode(bytes: string): string {
  return forge.util.encode64(bytes);
}
