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
const decrypt_team_by_private_key_helper_1 = require("./decrypt-team-by-private-key.helper");
function decryptTeamsByPrivateKeyHelper(encTeams, privateKey) {
    return __awaiter(this, void 0, void 0, function* () {
        return Promise.all(encTeams.map((encTeam) => decrypt_team_by_private_key_helper_1.default(encTeam, privateKey)));
    });
}
exports.default = decryptTeamsByPrivateKeyHelper;
//# sourceMappingURL=decrypt-teams-by-private-key.helper.js.map