import { BigInteger } from 'jsbn';
declare const kBigInteger: unique symbol;
declare const kHexLength: unique symbol;
export default class BigNumber {
    static ZERO: BigNumber;
    [kBigInteger]: BigInteger;
    [kHexLength]: number;
    constructor(bigInteger: BigInteger, hexLength: number);
    add(val: BigNumber): BigNumber;
    equals(val: BigNumber): any;
    multiply(val: BigNumber): BigNumber;
    modPow(exponent: BigNumber, m: BigNumber): BigNumber;
    mod(m: BigNumber): BigNumber;
    subtract(val: BigNumber): BigNumber;
    xor(val: BigNumber): BigNumber;
    inspect(): string;
    toHex(): any;
    static fromHex(input: string): BigNumber;
    static randomInteger(bytes: number): BigNumber;
}
export {};
