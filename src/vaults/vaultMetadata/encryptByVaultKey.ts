import encrypt, { EncryptedData } from '../../common/aes/encrypt';

export const encryptByVaultKey = (
  metadata: Record<string, any>,
  vaultKey: string,
): Promise<EncryptedData> => {
  return encrypt(JSON.stringify(metadata), vaultKey);
};

export default encryptByVaultKey;