"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptByTeamKey = exports.encryptByTeamKey = void 0;
const encryptByTeamKey_1 = require("./encryptByTeamKey");
Object.defineProperty(exports, "encryptByTeamKey", { enumerable: true, get: function () { return encryptByTeamKey_1.encryptByTeamKey; } });
const decryptByTeamKey_1 = require("./decryptByTeamKey");
Object.defineProperty(exports, "decryptByTeamKey", { enumerable: true, get: function () { return decryptByTeamKey_1.decryptByTeamKey; } });
exports.default = {
    encryptByTeamKey: encryptByTeamKey_1.encryptByTeamKey,
    decryptByTeamKey: decryptByTeamKey_1.decryptByTeamKey,
};
//# sourceMappingURL=index.js.map