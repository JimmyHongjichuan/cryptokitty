var SiringClockAuction  = artifacts.require("SiringClockAuction");

module.exports = function(deployer) {
   deployer.deploy(SiringClockAuction,"0xcc2449d0b9df19a09c51e8017557a2fe8e12fb3d",100);
  // Use deployer to state migration tasks.
};

