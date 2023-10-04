# ERC-4626: Tokenized Yield-Bearing Vault

A yield-bearing vault is a smart contract ([`/contracts/TCGVaultFees.sol`](https://github.com/benmoussa96/tokenized-vault-smart-contract/blob/master/contracts/TCGVaultFees.sol)) that issues tokenized shares of a single underlying ERC-20 token and helps users find the best yield on their crypto tokens by executing different strategies.

## How it works

In exchange for the assets deposited into an ERC-4626 vault, a user receives shares minted by the smart contract (aka 'vault tokens'). The number of shares a user gets depends on the amount of assets they put in and on the exchange rate of the vault which is defined by the current liquidity held by it.

- If a vault has 100 tokens to back 200 shares, then each share is worth 0.5 assets.
- If a vault has 200 tokens to back 100 shares, then each share is worth 2.0 assets.

When the vault generetes yield on the underlying asset through strategies (yield farming, lenging, staking...), the shares appreciate in value. These shares can later be burned to redeem and withdraw the corresponding assets, including any profits made.

## Fees

In an ERC-4626 vault, fees can also be captured when users deposit and/or withdraw tokens.

> In this example, entry and exit fees of 0.5% are charged and trasfered to the treasury (0x477341a96a678C849119A583e81faD7C2D61DAf7).

### Built with

- TypeScript
- Solidity
- Yarn
- Node.js (14.0.0)
- Hardhat
- Ethers
- OpenZeppelin

## Getting Started

### Dependencies

- [Alchemy](https://alchemy.com) account and API key.

### Installing

1. Clone the repo

   ```
   git clone https://github.com/benmoussa96/tokenized-vault-smart-contract.git
   ```

2. Change into repo root directory

   ```
   cd tokenized-vault-smart-contract
   ```

3. Install dependencies

   ```
   yarn
   ```

### Compiling and deploying new contract (optional)

4.  Create a `.env` file at the root of the project. Make sure the account used is funded.

    ```
    MAINNET_RPC_URL=...
    GOERLI_RPC_URL=...
    PIVATE_KEY=...
    ```

5.  Deploy the contract:

    ```
    yarn hardhat deploy --network goerli
    ```

6.  Run the tests:

    ```
    yarn hardhat test
    ```
