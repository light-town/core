import { EncryptedVaultItemCategory } from './definitions';
export declare const defaultSchemas: {
    name: string;
    schema: {
        fields: {
            Avatar: {
                name: string;
                view: {
                    element: string;
                };
                editor: {
                    element: string;
                };
                position: number;
                count: {
                    max: number;
                    min: number;
                };
                required: boolean;
                pinned: boolean;
                useInOverview: boolean;
            };
            Username: {
                name: string;
                view: {
                    element: string;
                };
                editor: {
                    element: string;
                };
                position: number;
                count: {
                    max: number;
                    min: number;
                };
                required: boolean;
                pinned: boolean;
                useInOverview: boolean;
            };
            Password: {
                name: string;
                view: {
                    element: string;
                };
                editor: {
                    element: string;
                };
                position: number;
                count: {
                    max: number;
                    min: number;
                };
                required: boolean;
                pinned: boolean;
                useInOverview: boolean;
            };
            'Website URL': {
                name: string;
                view: {
                    element: string;
                };
                editor: {
                    element: string;
                };
                required: boolean;
                pinned: boolean;
                useInOverview: boolean;
            };
        };
    };
}[];
export default function createDefaultVaultItemCategories(vaultKey: string): Promise<EncryptedVaultItemCategory[]>;
