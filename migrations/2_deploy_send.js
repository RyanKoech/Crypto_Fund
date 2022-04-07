var Send = artifacts.require("SendEther");

module.exports = function(deployer) {
  deployer.deploy(Send);
};