export interface Verifier {
    verifier: string;
    privateKey: string;
    salt: string;
}
export declare const deriveVerifier: (secretKey: string, password: string) => Verifier;
export default deriveVerifier;
