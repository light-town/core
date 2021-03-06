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
function decryptVaultItemHelper(encVaultItem, vaultKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const vaultItem = yield encryption_1.default.vaults.items.decryptVaultItem(encVaultItem, vaultKey);
        const result = Object.assign(Object.assign({}, vaultItem), encVaultItem);
        delete result.encOverview;
        delete result.encDetails;
        return result;
    });
}
exports.default = decryptVaultItemHelper;
//# sourceMappingURL=decrypt-vault-item.helper.js.map