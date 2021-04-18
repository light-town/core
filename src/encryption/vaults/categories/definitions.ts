import { EncryptedData } from '../../common/aes/definitions';

export class EncryptedVaultItemCategory {
  encOverview: EncryptedData;
}

export class DecryptedVaultItemCategory<Overview = Record<string, any>> {
  overview: Overview;
}
