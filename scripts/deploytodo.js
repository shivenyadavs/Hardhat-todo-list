const hre = require("hardhat");

async function main() {
  const TodoList = await hre.ethers.getContractFactory("TodoList");
  const todoList = await TodoList.deploy();

  await todoList.waitForDeployment();
  const ca= await todoList.getAddress();

  console.log(`TodoList deployed to: ${ca}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
