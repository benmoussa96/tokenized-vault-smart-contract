import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers, network } from "hardhat";
import { developmentChains } from "../../helper-hardhat-config";
import { TCGVault } from "../../typechain-types";

developmentChains.includes(network.name)
  ? describe.skip
  : describe("TCGVault", async () => {
      let vault: TCGVault, deployer: SignerWithAddress;

      beforeEach(async () => {
        const accounts = await ethers.getSigners();
        deployer = accounts[0];
        vault = await ethers.getContract("TCGVault", deployer);
      });

      it("", async () => {});
    });
