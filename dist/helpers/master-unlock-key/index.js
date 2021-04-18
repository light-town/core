"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deriveMasterUnlockKeyHelper = void 0;
const deriveMasterUnlockKey_1 = require("../../encryption/common/deriveMasterUnlockKey");
const normalizeMasterPassword_1 = require("../../encryption/common/normalizeMasterPassword");
function deriveMasterUnlockKeyHelper(accountKey, masterPassword, salt) {
    return deriveMasterUnlockKey_1.default(accountKey, normalizeMasterPassword_1.default(masterPassword), salt);
}
exports.deriveMasterUnlockKeyHelper = deriveMasterUnlockKeyHelper;
exports.default = {
    deriveMasterUnlockKeyHelper,
};
//# sourceMappingURL=index.js.map