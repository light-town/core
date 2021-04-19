export declare const PASSWORD_SCHEMA: {
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
