import { ethers } from 'ethers';
import React, { useState, useEffect } from 'react';
import AssetManagement from '../Contract/AssetManagement.json';

const CONTRACT_ADDRESS = '0x4F560c055C48516cB362BDcc678ed9B31ca2A51B';
const CONTRACT_ABI = AssetManagement.abi;

function DigContent() {
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [hashId, setHashId] = useState('');
  const [email, setEmail] = useState('');
  const [assetType, setAssetType] = useState('');
  const [assets, setAssets] = useState([]);
  const [account, setAccount] = useState(null);


  const connectToMetaMask = async () => {
        // Check if MetaMask is installed
        if (window.ethereum) {
          // Request account access
          await window.ethereum.enable();
          // Create a new Web3Provider instance
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          // Get the current account
          const accounts = await provider.listAccounts();
          setAccount(accounts[0]);
        } else {
          console.error("MetaMask is not installed.");
        }
      };

  useEffect(() => {
    const connectToBlockchain = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      const accounts = await provider.listAccounts();
      setProvider(provider);
      setContract(contract);
      setAccounts(accounts);
    };
    if (typeof window.ethereum !== 'undefined') {
      connectToBlockchain();
    }
  }, []);

  const addAsset = async () => {
    try {
      const tx = await contract.addAsset(hashId, email, assetType);
      await tx.wait();
      setHashId('');
      setEmail('');
      setAssetType('');
    } catch (err) {
      console.log('Error adding asset:', err);
    }
  };

  const deleteAsset = async (hashId) => {
    try {
      const tx = await contract.deleteAssetByHash(hashId);
      await tx.wait();
    } catch (err) {
      console.log('Error deleting asset:', err);
    }
  };

  const getAssets = async () => {
    const assetIds = await contract.getAllAssets();
    const assets = [];
    for (const assetId of assetIds) {
      const asset = await contract.getAsset(assetId);
      assets.push({
        hashId: asset[0],
        owner: asset[1],
        assetType: asset[2]
      });
    }
    setAssets(assets);
  };

  return (
    <div>
        <div className='digitContentHead'>
            <h1>Asset Management</h1>
            
            <div>
            {account ? (
                <p>Connected to MetaMask: {account}</p>
            ) : (
                <button onClick={connectToMetaMask}>Connect to MetaMask</button>
            )}
            </div>
        </div>
      <div className='digitContent' >
             {/* <h2>Add Asset</h2> */}
             
             <div className='digitContentInput'>
                    <div>
                    <label>Hash ID:</label>
                    <input type="text" value={hashId} onChange={(e) => setHashId(e.target.value)} />
                     </div>
                     <div>
                    <label>Email:</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                    <label>Asset Type:</label>
                    <input type="text" value={assetType} onChange={(e) => setAssetType(e.target.value)} />
                    </div>
                    <button onClick={addAsset}>Add Asset</button>
                    <div>
                        <h2>Assets</h2>
                        <button onClick={getAssets}>Refresh</button>
                    </div>
            </div>
             <table>
                <thead>
                <tr>
                    <th>Hash ID</th>
                    <th>Owner</th>
                    <th>Asset Type</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                        {assets.map((asset, index) => (
                        <tr key={index}>
                            <td>{asset.hashId}</td>
                            <td>{asset.owner}</td>
                            <td>{asset.assetType}</td>
                            <td><button onClick={() => deleteAsset(asset.hashId)}>Delete</button></td>
                    </tr>
                    ))}
                    </tbody>
            </table>
        </div>
        </div>
   
          )}
    export default DigContent


