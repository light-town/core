"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forge = exports.srp = exports.common = void 0;
const common_1 = require("./common");
exports.common = common_1.default;
const srp_1 = require("./srp");
exports.srp = srp_1.default;
const forge_1 = require("./forge");
exports.forge = forge_1.default;
exports.default = { common: common_1.default, srp: srp_1.default, forge: forge_1.default };
//# sourceMappingURL=index.js.map