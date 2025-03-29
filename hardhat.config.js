require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",  // Ensure this is compatible with your contracts
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/your_api_key",
      accounts: ["your_private_key"], // Replace with your actual private key
    },
    localhost: {
      url: "http://127.0.0.1:8545",  // Hardhat node default RPC
    },
  },
};
