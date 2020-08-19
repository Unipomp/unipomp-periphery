var UnipompRouter = artifacts.require("UnipompRouter");

module.exports = function(deployer, network, accounts) {
  let factory = "0x4558B1C3E2fF433a06851e1515B86772511e5A11";
  let weth = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  let owner = accounts[0];
  // Deploy the Migrations contract as our only task
  deployer.deploy(UnipompRouter, factory, weth, {from:owner});
};