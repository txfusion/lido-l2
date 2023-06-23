import { Deployer } from '@matterlabs/hardhat-zksync-deploy';
import { Wallet } from 'zksync-web3';
import * as hre from 'hardhat';

import { ERC20_BRIDGED_CONSTANTS } from './utils/constants';

const DEPLOYER_WALLET_PRIVATE_KEY = process.env.DEPLOYER_WALLET_PRIVATE_KEY || '';
const ERC20_BRIDGED_TOKEN_CONTRACT_NAME = 'ERC20BridgedUpgradeable';

async function main() {
    console.info('Deploying ' + ERC20_BRIDGED_TOKEN_CONTRACT_NAME + '...');

    const zkWallet = new Wallet(DEPLOYER_WALLET_PRIVATE_KEY);
    const deployer = new Deployer(hre, zkWallet);

    const artifact = await deployer.loadArtifact(ERC20_BRIDGED_TOKEN_CONTRACT_NAME);

    const contract = await hre.zkUpgrades.deployProxy(
        deployer.zkWallet,
        artifact,
        [
            ERC20_BRIDGED_CONSTANTS.NAME,
            ERC20_BRIDGED_CONSTANTS.SYMBOL,
            ERC20_BRIDGED_CONSTANTS.DECIMALS,
        ],
        { initializer: '__ERC20BridgedUpgradeable_init' }
    );

    await contract.deployed();
}

main().catch((error) => {
    throw error;
});