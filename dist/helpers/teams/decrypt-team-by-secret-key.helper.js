"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const encryption_1 = require("../../encryption");
function decryptTeamBySecretKeyHelper(encTeam, secretKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = yield encryption_1.default.teams.key.decryptBySecretKey(encTeam.encKey, secretKey);
        const overview = yield encryption_1.default.teams.overview.decryptByTeamKey(encTeam.encOverview, key);
        const result = Object.assign({ key, overview: overview }, encTeam);
        delete result.encKey;
        delete result.encOverview;
        return result;
    });
}
exports.default = decryptTeamBySecretKeyHelper;
//# sourceMappingURL=decrypt-team-by-secret-key.helper.js.map