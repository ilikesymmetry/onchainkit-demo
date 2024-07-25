// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";

import {Click} from "../src/Click.sol";

contract Deploy is Script {
    function run() public {
        vm.startBroadcast();

        // deploy with salt to use deterministic-deployment-proxy for easy multi-chain deployments
        new Click{salt: 0}();

        vm.stopBroadcast();
    }
}
