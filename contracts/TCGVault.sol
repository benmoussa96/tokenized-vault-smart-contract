// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "./TCGVaultFees.sol";
import "./TCGVaultStrategy.sol";

error TCGVault__NotOwner();

contract TCGVault is TCGVaultFees {
    address payable private immutable i_owner;

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
    }

    /** 
     * You can override the internal strategy logic for generating yield bellow
     */

     function beforeWithdraw(uint256 assets, uint256 shares) internal override {
      
     }

     function afterDeposit(uint256 assets, uint256 shares) internal override {
      
     }

    /** 
     * Setters and Getters
     */

    function _setFeeBasisPoints(uint256 _fee) public onlyOwner {
      setFeeBasisPoints(_fee);
    }

    function _setTreasuryAddress(address _treasuryAddress) public onlyOwner {
      setTreasuryAddress(_treasuryAddress);
    }
    
    function owner() public view returns (address) {
      return i_owner;
    }
}
 