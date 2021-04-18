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
function createPrimaryKeySetHelper(masterUnlockKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const symmetricKey = encryption_1.default.common.generateCryptoRandomString(32);
        const { publicKey, privateKey, } = yield encryption_1.default.common.rsa.generateKeyPair();
        const encryptedPrivateKey = yield encryption_1.default.keySets.privateKey.encryptBySymmetricKey(privateKey, symmetricKey);
        const encryptedSymmetricKey = yield encryption_1.default.keySets.symmetricKey.encryptBySecretKey(symmetricKey, masterUnlockKey.key, masterUnlockKey.salt);
        return {
            publicKey: encryption_1.default.common.rsa.publicKeyToString(publicKey),
            encPrivateKey: encryptedPrivateKey,
            encSymmetricKey: encryptedSymmetricKey,
        };
    });
}
exports.default = createPrimaryKeySetHelper;
//# sourceMappingURL=create-primary-key-set.helper.js.map