import { EncryptedData } from '../../common/aes/definitions';

export class EncryptedVaultFolder {
  encOverview: EncryptedData;
}

export class DecryptedVaultFolder<Overview = Record<string, any>> {
  overview: Overview;
}
