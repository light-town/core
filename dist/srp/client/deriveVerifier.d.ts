export interface Verifier {
    verifier: string;
    salt: string;
}
export declare const deriveVerifier: (secretKey: string, password: string) => Verifier;
export default deriveVerifier;
