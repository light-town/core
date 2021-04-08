import { encryptByTeamKey } from './encryptByTeamKey';
import { decryptByTeamKey } from './decryptByTeamKey';
export { encryptByTeamKey, decryptByTeamKey };
declare const _default: {
    encryptByTeamKey: (metadata: Record<string, any>, teamKey: string) => Promise<import("../../common/aes/encrypt").EncryptedData>;
    decryptByTeamKey: (metadata: import("../../common/aes/encrypt").EncryptedData, teamKey: string) => Promise<Record<string, any>>;
};
export default _default;
