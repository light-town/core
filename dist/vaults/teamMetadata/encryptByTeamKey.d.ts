import { EncryptedData } from '../../common/aes/encrypt';
export declare const encryptByTeamKey: (metadata: Record<string, any>, teamKey: string) => Promise<EncryptedData>;
export default encryptByTeamKey;
