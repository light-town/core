"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptByTeamKey = void 0;
const aes_1 = require("../../common/aes");
const encryptByTeamKey = (overview, teamKey) => {
    return aes_1.default.encrypt(JSON.stringify(overview), teamKey);
};
exports.encryptByTeamKey = encryptByTeamKey;
exports.default = exports.encryptByTeamKey;
//# sourceMappingURL=encryptByTeamKey.js.map