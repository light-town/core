import { EncryptedData } from '../../encryption/common/aes/definitions';
import {
  EncryptedVaultKeyByPublicKey,
  EncryptedVaultKeyBySecretKey,
} from '../../encryption/vaults/key/definitions';

export class VaultOverview {
  name: string;
  desc: string;
}

export class EncryptedVault {
  encKey: EncryptedVaultKeyByPublicKey | EncryptedVaultKeyBySecretKey;
  encOverview: EncryptedData;
}

export class DecryptedVault {
  key: string;
  overview: VaultOverview;
}
