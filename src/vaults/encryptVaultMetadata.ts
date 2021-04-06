import encrypt from './encrypt';

export const encryptVaultMetadata = (
  vaultKey: string,
  metadata: Record<string, any>,
) => {
  return encrypt(vaultKey, metadata);
};

export default encryptVaultMetadata;
