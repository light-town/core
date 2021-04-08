"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptByTeamKey = void 0;
const encrypt_1 = require("../../common/aes/encrypt");
const encryptByTeamKey = (metadata, teamKey) => {
    return encrypt_1.default(JSON.stringify(metadata), teamKey);
};
exports.encryptByTeamKey = encryptByTeamKey;
exports.default = exports.encryptByTeamKey;
//# sourceMappingURL=encryptByTeamKey.js.map