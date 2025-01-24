require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.19",
  networks: {
    anvil: {
      url: "http://127.0.0.1:8545",
      accounts: ["0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6"]
    }
  }
};

//0x5FbDB2315678afecb367f032d93F642f64180aa3
// cast send --rpc-url http://127.0.0.1:8545 --private-key 0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6 0x5FbDB2315678afecb367f032d93F642f64180aa3 "mint(address,uint256)" 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 7000000000000000000
// cast send --rpc-url http://127.0.0.1:8545/ --private-key <priv_key_contul_anvil > <DEPLOYED_TO ADDR> "mint(address,uint256)" <RECEIVER ADDR> 7000000000000000000
// more protect muscle sample scheme someone clump carry choose vintage inherit mule