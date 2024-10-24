import { task } from "hardhat/config";
import { getWallet } from "../lib/wallet";
import { getContract } from "../lib/contract";

task("deploy-nft", "Deploys the NFT contract")
    .setAction(async (_, hre) => {
        const wallet = getWallet();
        const MyNFT = await hre.ethers.getContractFactory("MyNFT", wallet);
        const nft = await MyNFT.deploy();
        await nft.deployed();
        console.log("NFT deployed to:", nft.address);
        return nft.address;
    });

task("mint-nft", "Mints a new NFT")
    .addParam("contract", "The NFT contract address")
    .addParam("recipient", "The recipient address")
    .addParam("uri", "The token URI")
    .setAction(async (taskArgs, hre) => {
        const contract = await getContract(taskArgs.contract);
        const tx = await contract.mintNFT(taskArgs.recipient, taskArgs.uri);
        const receipt = await tx.wait();
        console.log("NFT minted:", receipt.transactionHash);
        return receipt.transactionHash;
    });