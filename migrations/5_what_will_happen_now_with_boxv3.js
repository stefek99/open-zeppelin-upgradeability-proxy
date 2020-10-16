// migrations/5_what_will_happen_now_with_boxv3.js
const Box = artifacts.require('Box');
const BoxV3 = artifacts.require('BoxV3');
 
const { prepareUpgrade } = require('@openzeppelin/truffle-upgrades');
 
module.exports = async function (deployer) {
  const box = await Box.deployed();
  await prepareUpgrade(box.address, BoxV3, { deployer });
};