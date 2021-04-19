"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsbn_1 = require("jsbn");
const forge = require("node-forge");
const kBigInteger = Symbol('big-integer');
const kHexLength = Symbol('hex-length');
class BigNumber {
    constructor(bigInteger, hexLength) {
        this[kBigInteger] = bigInteger;
        this[kHexLength] = hexLength;
    }
    add(val) {
        return new BigNumber(this[kBigInteger].add(val[kBigInteger]), 0);
    }
    equals(val) {
        return this[kBigInteger].equals(val[kBigInteger]);
    }
    multiply(val) {
        return new BigNumber(this[kBigInteger].multiply(val[kBigInteger]), 0);
    }
    modPow(exponent, m) {
        return new BigNumber(this[kBigInteger].modPow(exponent[kBigInteger], m[kBigInteger]), m[kHexLength]);
    }
    mod(m) {
        return new BigNumber(this[kBigInteger].mod(m[kBigInteger]), m[kHexLength]);
    }
    subtract(val) {
        return new BigNumber(this[kBigInteger].subtract(val[kBigInteger]), this[kHexLength]);
    }
    xor(val) {
        return new BigNumber(this[kBigInteger].xor(val[kBigInteger]), this[kHexLength]);
    }
    inspect() {
        const hex = this[kBigInteger].toString(16);
        return `<BigNumber ${hex.slice(0, 16)}${hex.length > 16 ? '...' : ''}>`;
    }
    toHex() {
        if (this[kHexLength] === null) {
            throw new Error('This BigNumber has no specified length');
        }
        return this[kBigInteger].toString(16).padStart(this[kHexLength], '0');
    }
    static fromHex(input) {
        return new BigNumber(new jsbn_1.BigInteger(input, 16), input.length);
    }
    static randomInteger(bytes) {
        return BigNumber.fromHex(forge.util.bytesToHex(forge.random.getBytesSync(bytes)));
    }
}
exports.default = BigNumber;
BigNumber.ZERO = new BigNumber(new jsbn_1.BigInteger('0'), 0);
//# sourceMappingURL=big-number.js.map