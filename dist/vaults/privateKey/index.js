"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptBySymmetricKey = exports.encryptBySymmetricKey = void 0;
const encryptBySymmetricKey_1 = require("./encryptBySymmetricKey");
Object.defineProperty(exports, "encryptBySymmetricKey", { enumerable: true, get: function () { return encryptBySymmetricKey_1.encryptBySymmetricKey; } });
const decryptBySymmetricKey_1 = require("./decryptBySymmetricKey");
Object.defineProperty(exports, "decryptBySymmetricKey", { enumerable: true, get: function () { return decryptBySymmetricKey_1.decryptBySymmetricKey; } });
exports.default = {
    encryptBySymmetricKey: encryptBySymmetricKey_1.encryptBySymmetricKey,
    decryptBySymmetricKey: decryptBySymmetricKey_1.decryptBySymmetricKey,
};
//# sourceMappingURL=index.js.map