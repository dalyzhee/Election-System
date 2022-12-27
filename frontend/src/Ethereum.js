import {ethers, Contract} from 'ethers';
import Election from './contracts/Election.json';

const getBlockChain =() => new Promise((resolve, reject)=>{
    window.addEventListener('load', async()=>{
        if(window.ethereum){
            await window.ethereum.enable();
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const signerAddress = await signer.getAddress();
            const election = new Contract(
                Election.networks[window.ethereum.networkVersion].address,
                Election.abi,
                signer
            );
            resolve({signerAddress, election});
        }
        resolve({signerAddress: undefined, election:undefined})
    });
});
export default getBlockChain;