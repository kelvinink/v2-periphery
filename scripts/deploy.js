// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const UniRouter2 = await hre.ethers.getContractFactory("UniswapV2Router02");
  const uniRouter2 = await UniRouter2.deploy("0x08B1DE42506747F9D7537d8269D7E85904Dda1a5", "0xFDCf41DBe6Dd225369196d9466fce3C7f725b8B4");
  await uniRouter2.deployed();
  console.log("UniRouter2 deployed to:", uniRouter2.address);

//   const CompactRouter02 = await hre.ethers.getContractFactory("CompactRouter02");
//   const compactRouter = await CompactRouter02.deploy("0x08B1DE42506747F9D7537d8269D7E85904Dda1a5", "0xFDCf41DBe6Dd225369196d9466fce3C7f725b8B4");
//   await compactRouter.deployed();
//   console.log("UniRouter2 deployed to:", compactRouter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
