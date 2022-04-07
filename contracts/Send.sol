// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract SendEther {

    address private owner;
    mapping (uint => address) private contractAddresses;

    modifier isOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }

    constructor() public {
        owner = msg.sender;
    }

    function addContractAddresses (address contractAddress, uint contractId) public isOwner{
        contractAddresses[contractId] = contractAddress;
    }

    function sendEther(uint contractId) payable public {
        require (contractAddresses[contractId] != address(0x0), "Contract Does not Exist");

        address _to = contractAddresses[contractId];
        address(uint160(_to)).transfer(msg.value);
    }

    function changeOwner(address newOwner) public isOwner {
        owner = newOwner;
    }

    function getOwner() external view returns (address) {
        return owner;
    }
}