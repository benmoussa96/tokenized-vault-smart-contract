import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { developmentChains, networkConfig } from "../helper-hardhat-config";
import verify from "../utils/verify";

const deployTCGVault: DeployFunction = async function ({
  getNamedAccounts,
  deployments,
  network,
}: HardhatRuntimeEnvironment) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId: number = network.config.chainId!;

  const TCGToken = await deployments.get("TCGToken");
  const TCGTokenAddress = TCGToken.address;

  let treasuryAddress, feeBasisPoints, sharesName, sharesSymbol;

  if (developmentChains.includes(network.name)) {
    treasuryAddress = "0x477341a96a678C849119A583e81faD7C2D61DAf7";
    feeBasisPoints = 50;
    sharesName = "TCGShares";
    sharesSymbol = "sTCG";
  } else {
    treasuryAddress = networkConfig[chainId]["treasuryAddress"];
    feeBasisPoints = networkConfig[chainId]["feeBasisPoints"];
    sharesName = networkConfig[chainId]["sharesName"];
    sharesSymbol = networkConfig[chainId]["sharesSymbol"];
  }

  const vaultArgs = [TCGTokenAddress, treasuryAddress, feeBasisPoints, sharesName, sharesSymbol];

  const vault = await deploy("TCGVault", {
    from: deployer,
    args: vaultArgs,
    log: true,
    waitConfirmations: networkConfig[chainId]?.blockConfirmations || 1,
  });

  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    await verify(vault.address, vaultArgs);
  }
};

export default deployTCGVault;
deployTCGVault.tags = ["all", "vault"];
