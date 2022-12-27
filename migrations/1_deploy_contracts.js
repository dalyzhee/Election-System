const Election = artifacts.require("./Election.sol");

module.exports = async function(deployer){
    await deployer.deploy(Election);
};