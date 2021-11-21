require("@nomiclabs/hardhat-waffle");
require('hardhat-contract-sizer');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
      version: "0.6.6",
      settings: {
        optimizer: {
          enabled: true,
          runs: 10,
        },
      },
  },
  networks: {
    ropsten: {
      url: "https://ropsten.infura.io/v3/a7acd4a3bd114a1188f8c370a69ee57b",
      accounts: [`${process.env.TEST_ACCOUNT_KEY}`]
    },
    findora: {
      url: "https://prod-forge.prod.findora.org:8545",
      accounts: [`${process.env.TEST_ACCOUNT_KEY}`]
    }
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
  }
};
