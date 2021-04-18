import { EncryptedData } from '../../common/aes/definitions';
export default function decryptByTeamKey(overview: EncryptedData, teamKey: string): Promise<Record<string, any>>;
