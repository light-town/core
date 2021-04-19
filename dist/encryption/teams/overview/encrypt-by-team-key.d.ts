import { EncryptedData } from '../../common/aes/definitions';
export declare const encryptByTeamKey: (overview: Record<string, any>, teamKey: string) => Promise<EncryptedData>;
export default encryptByTeamKey;
