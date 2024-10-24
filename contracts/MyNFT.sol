// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;  // Using latest stable Solidity version

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    constructor() 
        ERC721("MyNFT", "MNFT")
        Ownable(msg.sender)  // Explicitly set the owner
    {}

    function mintNFT(address recipient, string memory tokenURI)
        public
        returns (uint256)
    {
        uint256 tokenId = _nextTokenId++; 
        _safeMint(recipient, tokenId);     // Using safeMint instead of _mint
        _setTokenURI(tokenId, tokenURI);
        
        return tokenId;
    }

    function getNextTokenId() public view returns (uint256) {
        return _nextTokenId;
    }
}