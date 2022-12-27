import { useState, useEffect } from 'react';
import './App.css';
import getBlockChain from './Ethereum';


function App() {
  const [elction, setElection] = useState(undefined);
  const [address, setAddress] = useState(undefined);
  const [candidates, setCandidates] = useState(undefined);
  const [counts, setCounts] = useState(0);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [voteCount, setVoteCount] = useState(0);

  useEffect(() =>{
    const init = async()=>{
      const {signerAddress, election} = await getBlockChain();
      const counts = await election.candidatesCount();
      for (var i = 1; i <= counts; i++) {
        const candidates = await election.candidates(i);
        var id = candidates[0].toNumber();
        var name = candidates[1];
        var voteCount = candidates[2].toNumber();
        
      }
      setId(id);
      setName(name);
      setVoteCount(voteCount);
      //console.log(counts.toNumber());
      setCounts(counts.toNumber());
      setAddress(signerAddress);
      setElection(election);
    };
    init();
  }, []);
  if(typeof elction === 'undefined'){
    return 'Loading..';
  }
  return (
    <div className="container">
      <div className='row'>
        <div className='col-lg-12'>
          <h1 className='text-center'>Election Results</h1>
          <hr/>
          <br/>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Votes</th>
                </tr>
              </thead>
              <tbody id="candidatesResults"> 
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{voteCount}</td>
                </tr>             
              </tbody>
            </table>
            <hr/>
            <p className="text-center">{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
