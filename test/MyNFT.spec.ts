import { expect } from "chai";
import { ethers } from "hardhat";
import { deployNFTContract } from "./test-helpers";

describe("NFT Tasks", function() {
    it("Should deploy NFT contract", async function() {
        const nft = await deployNFTContract();
        expect(nft.address).to.be.properAddress;
    });

    it("Should mint NFT", async function() {
        const [owner, recipient] = await ethers.getSigners();
        const nft = await deployNFTContract();
        const tokenURI = "https://example.com/token/1";
        
        await nft.mintNFT(recipient.address, tokenURI);
        expect(await nft.ownerOf(0)).to.equal(recipient.address);
    });
});