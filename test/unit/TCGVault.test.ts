import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { deployments, ethers, network } from "hardhat";
import { developmentChains } from "../../helper-hardhat-config";
import { TCGToken, TCGVault } from "../../typechain-types";

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("TCGVault", async () => {
      let asset: TCGToken, vault: TCGVault, deployer: SignerWithAddress;

      beforeEach(async () => {
        const accounts = await ethers.getSigners();
        deployer = accounts[0];
        await deployments.fixture(["all"]);

        asset = await ethers.getContract("TCGToken", deployer);
        vault = await ethers.getContract("TCGVault", deployer);
      });

      describe("constructor()", () => {
        it("sets the owner addresses correctly", async () => {
          const txnResponse = await vault.owner();
          expect(txnResponse).to.equal(deployer.address);
        });

        it("sets the underlying asset correctly", async () => {
          const txnResponse = await vault.asset();
          expect(txnResponse).to.include(asset.address);
        });

        it("sets the trseaury addresses correctly", async () => {
          const txnResponse = await vault.treasuryAddress();
          expect(txnResponse).to.equal("0x477341a96a678C849119A583e81faD7C2D61DAf7");
        });

        it("sets the fee correctly", async () => {
          const txnResponse = await vault.feeBasisPoints();
          expect(txnResponse).to.equal(50);
        });
      });
    });
