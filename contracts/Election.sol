// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Election{
    string public candidate;

    //constructor
    constructor () {
        candidate = "Candidate 1";
    }
    
    struct Candidate{
        uint id;
        string name;
        uint voteCount;
    }
    // Read and write candidate
    mapping(uint => Candidate) public candidates;
    // Store candiates count
    uint public candidatesCount;
}