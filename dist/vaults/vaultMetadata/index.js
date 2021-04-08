"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptByVaultKey = exports.encryptByVaultKey = void 0;
const encryptByVaultKey_1 = require("./encryptByVaultKey");
Object.defineProperty(exports, "encryptByVaultKey", { enumerable: true, get: function () { return encryptByVaultKey_1.encryptByVaultKey; } });
const decryptByVaultKey_1 = require("./decryptByVaultKey");
Object.defineProperty(exports, "decryptByVaultKey", { enumerable: true, get: function () { return decryptByVaultKey_1.decryptByVaultKey; } });
exports.default = {
    encryptByVaultKey: encryptByVaultKey_1.encryptByVaultKey,
    decryptByVaultKey: decryptByVaultKey_1.decryptByVaultKey,
};
//# sourceMappingURL=index.js.map