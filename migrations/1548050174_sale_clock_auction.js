                                                                            var SaleClockAuction  = artifacts.require("SaleClockAuction");

module.exports = function(deployer) {
   deployer.deploy(SaleClockAuction,"0xcc2449d0b9df19a09c51e8017557a2fe8e12fb3d",10);
  // Use deployer to state migration tasks.
};
