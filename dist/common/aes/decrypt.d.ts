import * as forge from 'node-forge';
import { EncryptedData } from './encrypt';
export declare const retrieveBufferFromBase64: (base64Value: any) => forge.util.ByteStringBuffer;
export declare const decrypt: (data: EncryptedData, key: string) => Promise<string>;
export default decrypt;
