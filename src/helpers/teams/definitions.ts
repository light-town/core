import { EncryptedData } from '../../encryption/common/aes/definitions';
import {
  EncryptedTeamKeyByPublicKey,
  EncryptedTeamKeyBySecretKey,
} from '../../encryption/teams/key/definitions';

export class TeamOverview {
  name: string;
  desc?: string;
  [key: string]: any;
}

export class EncryptedTeam {
  encKey: EncryptedTeamKeyByPublicKey | EncryptedTeamKeyBySecretKey;
  encOverview: EncryptedData;
}

export class DecryptedTeam {
  key: string;
  overview: TeamOverview;
}
