"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptByPrivateKey = exports.encryptByPublicKey = exports.decryptBySecretKey = exports.encryptBySecretKey = void 0;
const encryptBySecretKey_1 = require("./encryptBySecretKey");
Object.defineProperty(exports, "encryptBySecretKey", { enumerable: true, get: function () { return encryptBySecretKey_1.encryptBySecretKey; } });
const decryptBySecretKey_1 = require("./decryptBySecretKey");
Object.defineProperty(exports, "decryptBySecretKey", { enumerable: true, get: function () { return decryptBySecretKey_1.decryptBySecretKey; } });
const encryptByPublicKey_1 = require("./encryptByPublicKey");
Object.defineProperty(exports, "encryptByPublicKey", { enumerable: true, get: function () { return encryptByPublicKey_1.encryptByPublicKey; } });
const decryptByPrivateKey_1 = require("./decryptByPrivateKey");
Object.defineProperty(exports, "decryptByPrivateKey", { enumerable: true, get: function () { return decryptByPrivateKey_1.decryptByPrivateKey; } });
exports.default = {
    encryptBySecretKey: encryptBySecretKey_1.encryptBySecretKey,
    decryptBySecretKey: decryptBySecretKey_1.decryptBySecretKey,
    encryptByPublicKey: encryptByPublicKey_1.encryptByPublicKey,
    decryptByPrivateKey: decryptByPrivateKey_1.decryptByPrivateKey,
};
//# sourceMappingURL=index.js.map