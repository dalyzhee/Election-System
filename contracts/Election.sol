// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Election{
    string public candidate;

    //constructor
    constructor () {
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
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

    function addCandidate(string memory _name) private{
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }
}