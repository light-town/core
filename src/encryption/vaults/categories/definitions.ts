import { EncryptedData } from '../../common/aes/definitions';

export class EncryptedVaultItemCategory {
  encOverview: EncryptedData;
  encDetails?: EncryptedData;
}

export class DecryptedVaultItemCategory<
  Overview = Record<string, any>,
  Details = Record<string, any>
> {
  overview: Overview;
  details?: Details;
}
