const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');

const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    testnet: {
      host: "testnet-rpc.dexon.org",
      port: 443,
      network_id: 238,
      gas: 4000000,
      gasPrice: 24000000000, // 24 gwei
    },
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4000000,
      gasPrice: 10000000000, // 10 gwei
    },
    tangerineTestnet: {
      network_id: 374,
      gasPrice: 1e9,
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://testnet-rpc.tangerine-network.io");
      },
    },
    tangerineMainnet: {
      network_id: 411,
      gasPrice: 1e9,
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://mainnet-rpc.tangerine-network.io");
      },
    },
  },
  compilers: {
    solc: {
      version: "0.5.11",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
      }
    }
  }
};
