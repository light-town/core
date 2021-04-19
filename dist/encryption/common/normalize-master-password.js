"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeMasterPassword = void 0;
const unorm = require("unorm");
const normalizeMasterPassword = (password) => {
    const trimmedPassword = password.trim();
    const combiningCharacters = /[\u0300-\u036F]/g;
    return unorm.nfkd(trimmedPassword).replace(combiningCharacters, '');
};
exports.normalizeMasterPassword = normalizeMasterPassword;
exports.default = exports.normalizeMasterPassword;
//# sourceMappingURL=normalize-master-password.js.map