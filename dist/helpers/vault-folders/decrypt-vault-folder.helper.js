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
function decryptVaultFolderHelper(encVaultFolder, vaultKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const vaultFolder = yield encryption_1.default.vaults.folders.decryptVaultFolder(encVaultFolder, vaultKey);
        const result = Object.assign(Object.assign({}, vaultFolder), encVaultFolder);
        delete result.encOverview;
        return result;
    });
}
exports.default = decryptVaultFolderHelper;
//# sourceMappingURL=decrypt-vault-folder.helper.js.map