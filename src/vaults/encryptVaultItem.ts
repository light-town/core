import * as forge from 'node-forge';
import { generateRandomSalt } from '../common';

export const encryptContent = ({ content, vaultKey }) => {
  const iv = generateRandomSalt(12);
  const tagLength = 128;

  const cipher = forge.cipher.createCipher(
    'AES-GCM',
    forge.util.createBuffer(vaultKey),
  );
  cipher.start({
    iv,
    tagLength,
  });
  cipher.update(forge.util.createBuffer(JSON.stringify(content)));
  cipher.finish();

  const encryptedContent = {
    tag: forge.util.encode64(cipher.mode.tag.getBytes()),
    data: forge.util.encode64(cipher.output.getBytes()),
    tagLength,
    iv: forge.util.bytesToHex(iv),
  };
  return encryptedContent;
};

export const encryptVaultItem = async ({ details, overview, vaultKey }) => {
  const encDetails = await encryptContent({ content: details, vaultKey });
  const encOverview = await encryptContent({ content: overview, vaultKey });
  return {
    encDetails,
    encOverview,
  };
};

export default encryptVaultItem;
