import { ethers } from 'ethers';
import { getEnvVar } from './env';

export function getProvider(): ethers.providers.AlchemyProvider {
    return new ethers.providers.AlchemyProvider(
        'sepolia',
        getEnvVar('ALCHEMY_API_KEY')
    );
}