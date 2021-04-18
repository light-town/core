"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const definitions = require("./definitions");
const encryptByVaultKey_1 = require("./encryptByVaultKey");
const decryptByVaultKey_1 = require("./decryptByVaultKey");
exports.default = {
    definitions,
    encryptVaultFolder: encryptByVaultKey_1.default,
    decryptVaultFolder: decryptByVaultKey_1.default,
};
//# sourceMappingURL=index.js.map