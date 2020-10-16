// contracts/BoxV2.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;
 
contract BoxV3 {
    uint256 private value;
 
    // Emitted when the stored value changes
    event ValueChanged(uint256 newValue);
 
    // Stores a new value in the contract
    function store(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }
    
    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return value;
    }
    
    // Increments the stored value by 1
    function increment() public {
        value = value + 1;
        emit ValueChanged(value);
    }

    // For debugging easier to store strings because 0 1 2 3 4 5 confusing with numbers
    string public content;

    function storeString(string memory newContent) public {
        content = newContent;
    }

    // SOMETHING NEW NEW NEW NEW NEW NEW

    string public author;

    function storeAuthor(string memory newAuthor) public {
        author = newAuthor;
    }

}