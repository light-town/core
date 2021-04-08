import { EncryptedData } from '../../common/aes/encrypt';
export declare const decryptByTeamKey: (metadata: EncryptedData, teamKey: string) => Promise<Record<string, any>>;
export default decryptByTeamKey;
