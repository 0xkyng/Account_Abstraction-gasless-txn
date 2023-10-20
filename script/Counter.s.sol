// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console2} from "forge-std/Script.sol";
import "src/Counter.sol";

contract CounterScript is Script {
    function setUp() public {
       

    }

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address forwarder = 0xc82BbE41f2cF04e3a8efA18F7032BDD7f6d98a81;
        vm.startBroadcast(deployerPrivateKey);
        Counter counter = new Counter(forwarder);
        vm.stopBroadcast();
    }
}
