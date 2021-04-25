"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptByTeamKey = void 0;
const aes_1 = require("../../common/aes");
const utf_8_1 = require("../../common/utf-8");
const encryptByTeamKey = (overview, teamKey) => {
    return aes_1.default.encrypt(utf_8_1.default.encode(JSON.stringify(overview)), teamKey);
};
exports.encryptByTeamKey = encryptByTeamKey;
exports.default = exports.encryptByTeamKey;
//# sourceMappingURL=encrypt-by-team-key.js.map