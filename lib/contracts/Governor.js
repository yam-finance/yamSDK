"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YamGovernor = void 0;
const ethers_1 = require("ethers");
class YamGovernor {
    constructor(abi, signer) {
        this.abi = abi;
        this.signer = signer;
        this.contract = new ethers_1.ethers.Contract(this.abi.address, this.abi.abi, this.signer);
    }
    // Read functions
    /**
     * Get the yam governor name from the governor contract.
     * @returns {string} The name of the governor contract.
     */
    async name() {
        return await this.contract.name();
    }
    /**
     * Get the voting period of the governor.
     * @returns {object} The voting period of the governor.
     */
    async votingPeriod() {
        return await this.contract.votingPeriod();
    }
}
exports.YamGovernor = YamGovernor;
