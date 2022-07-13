// migrating the appropriate contracts
var FarmerRole = artifacts.require("../contracts/coffeeaccesscontrol/FarmerRole.sol");
var DistributorRole = artifacts.require("../contracts/coffeeaccesscontrol/DistributorRole.sol");
var RetailerRole = artifacts.require("../contracts/coffeeaccesscontrol/RetailerRole");
var ConsumerRole = artifacts.require("../contracts/coffeeaccesscontrol/ConsumerRole.sol");
var SupplyChain = artifacts.require("../contracts/coffeebase/SupplyChain.sol");

module.exports = function(deployer) {
  deployer.deploy(FarmerRole);
  deployer.deploy(DistributorRole);
  deployer.deploy(RetailerRole);
  deployer.deploy(ConsumerRole);
  deployer.deploy(SupplyChain);
};