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
const forge = require("node-forge");
function generateKeyPair() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((res, rej) => {
            forge.pki.rsa.generateKeyPair({ bits: 2048, workers: 2 }, function (err, keyPair) {
                if (err) {
                    rej(err);
                    return;
                }
                res(keyPair);
            });
        });
    });
}
exports.default = generateKeyPair;
//# sourceMappingURL=generate-key-pair.js.map