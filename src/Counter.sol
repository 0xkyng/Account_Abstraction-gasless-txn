// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {ERC2771Context} from "lib/openzeppelin-contracts/contracts/metatx/ERC2771Context.sol";

contract Counter is ERC2771Context{
    uint256 public number;
    address public lastUser;
    address public _trustedForwarder;

    constructor(address t) ERC2771Context(t) {
        _trustedForwarder = t;
    }

    function setNumber(uint256 newNumber) public {
        number = newNumber;
        lastUser = _msgSender();
    }

    function increment() public {
        number++;
        lastUser = _msgSender();
    }

    function showLastUser() public view returns (address) {
        return lastUser;
    }

    // 0xCD721817d72508D6506a0c64a1695A802c838674
}
