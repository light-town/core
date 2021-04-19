import { EncryptedVaultItemCategory } from './definitions';
export declare const defaultSchemas: {
    name: string;
    schema: {
        fields: ({
            name: string;
            view: {
                element: string;
            };
            editor: {
                element: string;
            };
            position: number;
            frequency: number;
            required: boolean;
        } | {
            name: string;
            view: {
                element: string;
            };
            editor: {
                element: string;
            };
            required: boolean;
            position?: undefined;
            frequency?: undefined;
        })[];
    };
}[];
export default function createDefaultVaultItemCategories(vaultKey: string): Promise<EncryptedVaultItemCategory[]>;
