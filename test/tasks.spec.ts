import { expect } from "chai";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Contract } from "ethers";
import { deployNFTContract } from "./test-helpers";

describe("MyNFT", function() {
    let nft: Contract;
    let owner: SignerWithAddress;
    let addr1: SignerWithAddress;

    beforeEach(async function() {
        [owner, addr1] = await ethers.getSigners();
        nft = await deployNFTContract();
    });

    it("Should mint a new NFT", async function() {
        const tokenURI = "https://example.com/token/1";
        await nft.mintNFT(addr1.address, tokenURI);
        expect(await nft.ownerOf(0)).to.equal(addr1.address);
        expect(await nft.tokenURI(0)).to.equal(tokenURI);
    });
});