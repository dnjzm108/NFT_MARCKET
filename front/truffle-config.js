const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");
const privateKey = "0x7fd74d3f75fee42dc2a3f96096a86c2c7e021b292c4c6719c318691422c8da41";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
    },
    baobab: {
      provider: () => {
        return new HDWalletProvider(privateKey, "http://kaikas.baobab.en:8551");
      },
      network_id: "1001", //Klaytn baobab testnet's network id
      gas: "8500000",
      gasPrice: null,
    },
    cypress: {
      provider: () => {
        return new HDWalletProvider(privateKey, "http://your.cypress.en:8551");
      },
      network_id: "8217", //Klaytn mainnet's network id
      gas: "8500000",
      gasPrice: null,
    },
  },
};