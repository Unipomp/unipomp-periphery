require('dotenv').config();

const { toHex, toWei } = require("web3-utils");

const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraProjectId = process.env.INFURA_PROJECT_ID;


module.exports = {


    plugins: ["truffle-contract-size", "verify-on-etherscan"],
    /**
     * Networks define how you connect to your ethereum client and let you set the
     * defaults web3 uses to send transactions. If you don't specify one truffle
     * will spin up a development blockchain for you on port 9545 when you
     * run `develop` or `test`. You can ask a truffle command to use a specific
     * network from the command line, e.g
     *
     * $ truffle test --network <network-name>
     */
  
    networks: {
      // Useful for testing. The `development` name is special - truffle uses it by default
      // if it's defined here and no other network is specified at the command line.
      // You should run a client (like ganache-cli, geth or parity) in a separate terminal
      // tab if you use this network and you must also set the `host`, `port` and `network_id`
      // options below to some value.
      
      development: {
        host: "127.0.0.1",
        gas: "6000000",
        gasPrice: toHex(toWei("1", "gwei")),
        network_id: "*",
        port: "8545",
        skipDryRun: true,
      },
      rinkeby: {
        provider: () => new HDWalletProvider(process.env.DEV_MNEMONIC, "https://rinkeby.infura.io/v3/" + infuraProjectId, 1),
        network_id: 4,       // Rinkeby's id
      },
      mainnet: {
        provider: () => new HDWalletProvider(process.env.MNEMONIC, "https://mainnet.infura.io/v3/" + infuraProjectId),
        network_id: 1,       // Mainnet id
        gasPrice: 160000000000 // 70 gwei      
      },
      
      // Another network with more advanced options...
      // advanced: {
        // port: 8777,             // Custom port
        // network_id: 1342,       // Custom network
        // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
        // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
        // from: <address>,        // Account to send txs from (default: accounts[0])
        // websockets: true        // Enable EventEmitter interface for web3 (default: false)
      // },
  
      // Useful for deploying to a public network.
      // NB: It's important to wrap the provider as a function.
      // ropsten: {
        // provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
        // network_id: 3,       // Ropsten's id
        // gas: 5500000,        // Ropsten has a lower block limit than mainnet
        // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
        // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
        // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
      // },
  
      // Useful for private networks
      // private: {
        // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
        // network_id: 2111,   // This network is yours, in the cloud.
        // production: true    // Treats this network as if it was a public net. (default: false)
      // }
    },
    // Configure your compilers
    compilers: {
      solc: {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
    }
  }