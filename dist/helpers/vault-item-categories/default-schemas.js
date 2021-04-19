"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PASSWORD_SCHEMA = void 0;
const fields = require("./fields");
exports.PASSWORD_SCHEMA = {
    fields: [
        {
            name: 'username',
            view: {
                element: fields.TEXT_FIELD,
            },
            editor: {
                element: fields.INPUT_TEXT_FIELD,
            },
            position: 1,
            frequency: 1,
            required: true,
        },
        {
            name: 'password',
            view: {
                element: fields.PASSWORD_FIELD,
            },
            editor: {
                element: fields.INPUT_PASSWORD_FIELD,
            },
            position: 2,
            frequency: 1,
            required: true,
        },
        {
            name: 'website',
            view: {
                element: fields.LINK_FIELD,
            },
            editor: {
                element: fields.INPUT_TEXT_FIELD,
            },
            required: false,
        },
    ],
};
//# sourceMappingURL=default-schemas.js.map