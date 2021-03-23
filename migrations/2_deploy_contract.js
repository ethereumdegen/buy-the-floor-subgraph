const BuyTheFloor = artifacts.require('./BuyTheFloor.sol')

module.exports = async function(deployer) {
  await deployer.deploy(BuyTheFloor)
}
