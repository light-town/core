import { EncryptedData } from '../../common/aes/definitions';

export class EncryptedVaultItem {
  encOverview: EncryptedData;
  encDetails?: EncryptedData;
}

export class DecryptedVaultItem<
  Overview = Record<string, any>,
  Details = Record<string, any>
> {
  overview: Overview;
  details?: Details;
}
