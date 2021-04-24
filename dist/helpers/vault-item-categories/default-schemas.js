"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultCategories = require("./default-categories");
const fields = require("./fields");
exports.default = {
    [defaultCategories.PASSWORD]: {
        name: defaultCategories.PASSWORD,
        fields: {
            Username: {
                name: 'Username',
                view: {
                    element: fields.TEXT_VIEW_FIELD,
                },
                editor: {
                    element: fields.TEXT_EDIT_FIELD,
                },
                position: 1,
                count: {
                    max: 1,
                    min: 1,
                },
                required: true,
                pinned: true,
            },
            Password: {
                name: 'Password',
                view: {
                    element: fields.PASSWORD_VIEW_FIELD,
                },
                editor: {
                    element: fields.PASSWORD_EDIT_FIELD,
                },
                position: 2,
                count: {
                    max: 1,
                    min: 1,
                },
                required: true,
                pinned: true,
            },
            'Website URL': {
                name: 'Website URL',
                view: {
                    element: fields.LINK_VIEW_FIELD,
                },
                editor: {
                    element: fields.LINK_EDIT_FIELD,
                },
                required: false,
                pinned: false,
            },
        },
    },
};
//# sourceMappingURL=default-schemas.js.map