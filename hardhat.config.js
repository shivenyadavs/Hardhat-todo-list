require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",  // Ensure this is compatible with your contracts
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/1d17963741f84acaac21dbf4153a198e",
      accounts: ["0x2942bb6ec2a8f2ba66bdbcfc5ef05e1b3306adb1c452c0cff8a4a999bec8a324"], // Replace with your actual private key
    },
    localhost: {
      url: "http://127.0.0.1:8545",  // Hardhat node default RPC
    },
  },
};
