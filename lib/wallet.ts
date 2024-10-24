import { ethers } from 'ethers';
import { getEnvVar } from './env';
import { getProvider } from './provider';

export function getWallet(): ethers.Wallet {
    return new ethers.Wallet(
        getEnvVar('ETH_PRIVATE_KEY'),
        getProvider()
    );
}