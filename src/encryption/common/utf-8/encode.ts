import * as forge from 'node-forge';

export default function encode(bytes: string): string {
  return forge.util.encodeUtf8(bytes);
}
