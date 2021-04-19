"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deriveMasterUnlockKeyHelper = void 0;
const derive_master_unlock_key_1 = require("../../encryption/common/derive-master-unlock-key");
const normalize_master_password_1 = require("../../encryption/common/normalize-master-password");
function deriveMasterUnlockKeyHelper(accountKey, masterPassword, salt) {
    return derive_master_unlock_key_1.default(accountKey, normalize_master_password_1.default(masterPassword), salt);
}
exports.deriveMasterUnlockKeyHelper = deriveMasterUnlockKeyHelper;
exports.default = {
    deriveMasterUnlockKeyHelper,
};
//# sourceMappingURL=index.js.map