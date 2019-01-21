pragma solidity ^0.4.18;

contract GeneScience{
    function isGeneScience() public pure returns (bool)
    {
        return true;
    }
    function mixGenes(uint256 genes1, uint256 genes2) public returns (uint256)
    {
        return  genes1|genes2;
    }
}
