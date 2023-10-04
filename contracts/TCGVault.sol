// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

import "./TCGVaultFees.sol";

error TCGVault__NotOwner();

contract TCGVault is TCGVaultFees {
    address payable private immutable i_owner;
    IERC20 private immutable i_asset;

    modifier onlyOwner() {
        if (msg.sender != i_owner) { revert TCGVault__NotOwner(); }
        _;
    }

    constructor(
      IERC20 _asset, 
      address _treasuryAddress, 
      uint256 _feeBasisPoints, 
      string memory _sharesName, 
      string memory _sharesSymbol
    ) TCGVaultFees(_asset, _treasuryAddress, _feeBasisPoints, _sharesName, _sharesSymbol) {
        i_owner = payable(msg.sender);
        i_asset = _asset;
    }
    
    function getOwner() public view returns (address) {
      return i_owner;
    }
    
    function getAsset() public view returns (IERC20) {
      return i_asset;
    }
}
 