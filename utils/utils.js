"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const bn = ethers_1.ethers.BigNumber;
class Utils {
    static normalYam(amount) {
        return bn.from(amount).div(bn.from(10).pow(18)).toNumber();
    }
    static bouYam(amount) {
        return bn.from(amount).div(bn.from(10).pow(24)).toNumber();
    }
    static numberDecs(amount) {
        return Math.floor(Number(amount.toString()) / 10 ** 24);
    }
}
exports.default = Utils;
