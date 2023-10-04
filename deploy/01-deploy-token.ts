import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { developmentChains, networkConfig } from "../helper-hardhat-config";
import verify from "../utils/verify";

const deployTCGToken: DeployFunction = async function ({
  getNamedAccounts,
  deployments,
  network,
}: HardhatRuntimeEnvironment) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId: number = network.config.chainId!;

  let assetName, assetSymbol;

  if (developmentChains.includes(network.name)) {
    assetName = "TheChainGeniusToken";
    assetSymbol = "TCG";
  } else {
    assetName = networkConfig[chainId]["assetName"];
    assetSymbol = networkConfig[chainId]["assetSymbol"];
  }

  const tokenArgs = [assetName, assetSymbol];

  const token = await deploy("TCGToken", {
    from: deployer,
    args: tokenArgs,
    log: true,
    waitConfirmations: networkConfig[chainId]?.blockConfirmations || 1,
  });

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    await verify(token.address, tokenArgs);
  }
};

export default deployTCGToken;
deployTCGToken.tags = ["all", "token"];
