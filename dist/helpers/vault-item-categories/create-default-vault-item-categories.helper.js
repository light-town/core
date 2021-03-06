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
exports.defaultSchemas = void 0;
const create_vault_item_category_helper_1 = require("./create-vault-item-category.helper");
const default_schemas_1 = require("./default-schemas");
exports.defaultSchemas = Object.values(default_schemas_1.default).map((s) => ({
    name: s.name,
    schema: {
        fields: s.fields,
    },
}));
function createDefaultVaultItemCategories(vaultKey) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Promise.all(exports.defaultSchemas.map((s) => create_vault_item_category_helper_1.default({
            name: s.name,
            default: true,
        }, { schema: s.schema }, vaultKey)));
    });
}
exports.default = createDefaultVaultItemCategories;
//# sourceMappingURL=create-default-vault-item-categories.helper.js.map