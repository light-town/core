import * as forge from 'node-forge';
import { EncryptedData } from './encrypt';
export declare const retrieveBufferFromBase64: (base64Value: any) => forge.util.ByteStringBuffer;
export declare const decrypt: (key: string, data: EncryptedData) => Promise<Record<string, any>>;
export default decrypt;
