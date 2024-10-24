import { ethers } from 'ethers';
import { getWallet } from './wallet';
import * as MyNFT from '../artifacts/contracts/MyNFT.sol/MyNFT.json';

export async function getContract(contractAddress: string): Promise<ethers.Contract> {
    const wallet = getWallet();
    return new ethers.Contract(
        contractAddress,
        MyNFT.abi,
        wallet
    );
}