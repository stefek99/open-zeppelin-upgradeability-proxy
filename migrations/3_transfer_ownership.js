// migrations/3_transfer_ownership.js
const { admin } = require('@openzeppelin/truffle-upgrades');
 
module.exports = async function (deployer, network) {
  // Use address of your Gnosis Safe
  const gnosisSafe = '0x823C13Be120FfB7f369bb222B0940CB2dB611597'; // https://rinkeby.gnosis-safe.io/app/#/safes/0x823C13Be120FfB7f369bb222B0940CB2dB611597/balances
 
  // Don't change ProxyAdmin ownership for our test network
  if (network !== 'test') {
    // The owner of the ProxyAdmin can upgrade our contracts
    await admin.transferProxyAdminOwnership(gnosisSafe);
  }
};