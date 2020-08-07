var UnipompRouter = artifacts.require("UnipompRouter");

module.exports = function(deployer, network, accounts) {
  let factory = "0x45E3Ad6815763336CDc6A773BB70330fA5dDddcf";
  let weth = "0xc778417E063141139Fce010982780140Aa0cD5Ab";
  let owner = accounts[0];
  // Deploy the Migrations contract as our only task
  deployer.deploy(UnipompRouter, factory, weth, {from:owner});
};