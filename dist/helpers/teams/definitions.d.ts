import { EncryptedData } from '../../encryption/common/aes/definitions';
import { EncryptedTeamKeyByPublicKey, EncryptedTeamKeyBySecretKey } from '../../encryption/teams/key/definitions';
export declare class TeamOverview {
    name: string;
    desc?: string;
    [key: string]: any;
}
export declare class EncryptedTeam {
    encKey: EncryptedTeamKeyByPublicKey | EncryptedTeamKeyBySecretKey;
    encOverview: EncryptedData;
}
export declare class DecryptedTeam {
    key: string;
    overview: TeamOverview;
}
