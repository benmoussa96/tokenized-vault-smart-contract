export interface NetworkConfigItem {
  name?: string;
  blockConfirmations?: number;
  assetName?: string;
  assetSymbol?: string;
  sharesName?: string;
  sharesSymbol?: string;
  treasuryAddress?: string;
  feeBasisPoints?: number;
}

export interface NetworkConfigInfo {
  [key: string]: NetworkConfigItem;
}

export const networkConfig: NetworkConfigInfo = {
  1: {
    name: "mainnet",
    blockConfirmations: 6,
  },
  5: {
    name: "goerli",
    blockConfirmations: 6,
    assetName: "TheChainGeniusToken",
    assetSymbol: "TCG",
    sharesName: "TCGShares",
    sharesSymbol: "sTCG",
    treasuryAddress: "0x477341a96a678C849119A583e81faD7C2D61DAf7",
    feeBasisPoints: 50,
  },
  137: {
    name: "polygon",
    blockConfirmations: 6,
  },
};

// export const developmentChains = [31337];

export const developmentChains = ["hardhat", "localhost"];
