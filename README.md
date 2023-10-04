# ERC-4626: Tokenized Yield-Bearing Vault

A yield-bearing vault is a smart contract that issues tokenized shares of a single underlying ERC-20 token and helps users find the best yield on their crypto tokens by executing different strategies.

In exchange for the assets deposited into an ERC-4626 vault, a user receives shares minted by the smart contract. These shares can later be burned to redeem and withdraw the corresponding underlying assets. The number of shares a user gets depends on the amount of assets they put in and on the exchange rate of the vault. This exchange rate is defined by the current liquidity held by the vault.

- If a vault has 100 tokens to back 200 shares, then each share is worth 0.5 assets.
- If a vault has 200 tokens to back 100 shares, then each share is worth 2.0 assets.

In an ERC-4626 vault, fees can also be captured when users deposit and/or withdraw tokens.
In this example, entry and exit fees of `0.5%` are charged and trasfered to the treasury `0x477341a96a678C849119A583e81faD7C2D61DAf7`.

## Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
