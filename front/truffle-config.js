const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");
const privateKey = "0x637e352fed89ae10d1875e96ef19b9f328f1e4dc58572a64cc46351bfac53e0c";

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
  compilers: {
    solc: {
      version: "0.5.6"
    }
  }
};