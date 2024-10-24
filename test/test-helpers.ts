import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Contract } from "ethers";

export async function deployNFTContract(): Promise<Contract> {
    const MyNFT = await ethers.getContractFactory("MyNFT");
    const nft = await MyNFT.deploy();
    await nft.deployed();
    return nft;
}