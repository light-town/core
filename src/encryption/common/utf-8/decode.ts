import * as forge from 'node-forge';

export default function decode(bytes: string): string {
  return forge.util.decodeUtf8(bytes);
}
