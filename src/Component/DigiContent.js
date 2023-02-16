import { ethers } from 'ethers';
import React, { useState, useEffect } from 'react';
import ContractABI from '../Contract/AssetManagement.json';

// const CONTRACT_ADDRESS = '0x4F560c055C48516cB362BDcc678ed9B31ca2A51B';
// !insert this at the abi
// const CONTRACT_ABI = AssetManagement.abi;


function DigiContent() {
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [hashId, setHashId] = useState('');
  const [email, setEmail] = useState('');
  const [assetType, setAssetType] = useState('');
  const [assets, setAssets] = useState([]);
  const [account, setAccount] = useState(null);
  const [stringValue, setStringValue] = useState("");
  const [bytes32Value, setBytes32Value] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  


    // ! connect to metamask
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
  //     const connectToMetamask = async () => {
  //   if (window.ethereum) {
  //     try {
  //       await window.ethereum.request({ method: "eth_requestAccounts" });
  //       const provider = new ethers.providers.Web3Provider(window.ethereum);
  //       await provider.send("eth_requestAccounts", []);
  //       const signer = provider.getSigner();

  //       //const network = await provider.getNetwork();
  //       //const contractAddress = digitalAsset.networks[network.chainId].address;
  //       const contractAddress = "0x4F560c055C48516cB362BDcc678ed9B31ca2A51B"
  //       //const contractABI = digitalABI ;
  //       const contract = new ethers.Contract(contractAddress, ContractABI, signer);
  //       setProvider(provider);
  //       setContract(contract);
  //       setContractAddress(contractAddress);
  //       setContractABI(contractABI);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   } else {
  //     console.log("Please install MetaMask!");
  //   }
  // }

  

  // useEffect(() => {
  //   const connectToBlockchain = async () => {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     // const contract = new ethers.Contract(contractAddress, ContractABI, signer);
  //     // const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
  //     const accounts = await provider.listAccounts();
  //     setProvider(provider);
  //     setContract(contract);
  //     setAccounts(accounts);
  //   };
  //   if (typeof window.ethereum !== 'undefined') {
  //     connectToBlockchain();
  //   }
  // }, []);

  const addAsset = async () => {
    try {
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);

// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
      const signer = provider.getSigner()
      // Load the contract and call the stringToBytes32 function
      const contractAddress = "0x4F560c055C48516cB362BDcc678ed9B31ca2A51B"
      const contract = new ethers.Contract(contractAddress, ContractABI,signer);
      const tx = await contract.addAsset(hashId, email, assetType);
      await tx.wait();
      setHashId('');
      setEmail('');
      setAssetType('');
      console.log(tx)
    } catch (err) {
      console.log('Error adding asset:', err);
    }
  };

  const deleteAsset = async (hashId) => {
    try {
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // Load the contract and call the stringToBytes32 function
      const contractAddress = "0x4F560c055C48516cB362BDcc678ed9B31ca2A51B"
      const contract = new ethers.Contract(contractAddress, ContractABI, provider);
      const tx = await contract.deleteAssetByHash(hashId);
      await tx.wait();
    } catch (err) {
      console.log('Error deleting asset:', err);
    }
  };
 
  
  
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [error, setError] = useState("");

  async function handleGetAsset() {
    try {
      // Connect to the Ethereum network using Metamask or another provider
      await window.ethereum.enable();
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      // await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // Load the contract and call the stringToBytes32 function
      const contractAddress = "0x4F560c055C48516cB362BDcc678ed9B31ca2A51B"
      const contract = new ethers.Contract(contractAddress, ContractABI, provider);

      // Load the contract and call the function
      // const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
      const result = await contract.getAsset(inputValue);

      // Parse the result and set the output value
      const [hashId, assetOwner, assetType] = result;
      setOutputValue(`Hash ID: ${hashId}\nOwner: ${assetOwner}\nType: ${assetType}`);
      console.log(result)
    } catch (err) {
      // setError(err.message);
      console.log(err)
    }
  }
  
  // !olde 
  // const getAssets = async () => {
  //   await window.ethereum.enable();
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   await provider.send("eth_requestAccounts", []);
  //   const contractAddress = "0x4F560c055C48516cB362BDcc678ed9B31ca2A51B"
  //   // const signer = provider.getSigner()
  //   const contract = new ethers.Contract(contractAddress, ContractABI,provider);
  //   const assetIds = await contract.getAllAssets();
  //   const assets = [];
  //   for (const assetId of assetIds) {
  //     const asset = await contract.getAsset(assetId);
  //     assets.push({
  //       hashId: asset[0],
  //       owner: asset[1],
  //       assetType: asset[2]
  //     });
  //   console.log(assetIds)
  //   }
  //   setAssets(assets);
  // };

  // ! string to byte
  async function handleStringToBytes32() {
    try {
      // Connect to the Ethereum network using Metamask or another provider
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // Load the contract and call the stringToBytes32 function
      const contractAddress = "0x4F560c055C48516cB362BDcc678ed9B31ca2A51B"
      const contract = new ethers.Contract(contractAddress, ContractABI, provider);
      const result = await contract.stringToBytes32(stringValue);

      // Set the bytes32 value
      setBytes32Value(result);
      // console.log(result)
    } catch (err) {
      setErrorMessage(err.message);
    }
  }
  // ! byte to string
  const [byteValue,setByteValue]=useState("")
  const [stringValuePaste,setStringValuePaste]=useState("")
    const handleByte32toString = async ()=> {
    try {
      // Connect to the Ethereum network using Metamask or another provider
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // Load the contract and call the stringToBytes32 function
      const contractAddress = "0x4F560c055C48516cB362BDcc678ed9B31ca2A51B"
      const contract = new ethers.Contract(contractAddress, ContractABI, provider);
      // const result = await contract.stringToBytes32(string);

      const tx = await contract.bytes32ToString(byteValue);
      console.log(tx)
      // Wait for the transaction to be mined and get the result
      // const result = await tx.wait();
      // setOutputValue(result.events[0].args.result);
      setStringValuePaste(tx)
    } catch (err) {
      // setError(err.message);
      console.log("me")
    }
  }
  // ! copy and paste
  const handleCopyByte = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(bytes32Value);
  };
  // const handleCopyString = (event) => {
  //   event.preventDefault();
  //   navigator.clipboard.writeText(byteValue);
  // };
  const handleCopyString = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(stringValuePaste);
  };

  // const handlePaste = (event) => {
  //   event.preventDefault();
  //   navigator.clipboard.readText().then((clipText) => {
  //     setText(clipText);
  //   });
  // };
  return (
    <div className='digiContent'>
        <div className='digitContentHead'>
            <h1>Asset Management</h1>
            
            {/* <div>
            {account ? (
                <p>Connected to MetaMask: {account}</p>
            ) : (
                <button onClick={connectToMetamask}>Connect to MetaMask</button>
            )}
            </div> */}
            <div className='digiContentWallet'>
            {account ? (
                <p>Connected to MetaMask: {account}</p>
            ) : (
                <button onClick={connectToMetaMask}>Connect to MetaMask</button>
            )}
            </div>
        </div>
      <div className='digitContentBody' >
             {/* <h2>Add Asset</h2> */}
             
             <div className='digitContentInput'>
                    <div className=' contentInput'>
                        <label>Hash ID:</label>
                        <input type="text" value={stringValue} onChange={(e) => setStringValue(e.target.value)} />
                        <button onClick={handleStringToBytes32}>Change to byte</button>
                        <div className='copy-link'>
                              <input value={bytes32Value} onChange={(event) => setBytes32Value(event.target.value)} />
                              <button onClick={handleCopyByte}>
                                <span className='copy'><i className="fa-regular fa-copy"></i></span>
                              </button>
                          </div>
                     </div>
                     <div >
                        <h2> Add Assets</h2>
                        <label>Hash Id:</label><br/>
                        <input type="" value={hashId} onChange={(e)=>setHashId(e.target.value)}/><br/>
                        {/* <input type=""/> */}
                        <label>Email:</label><br/>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
                        <label>Asset Type:</label><b/>
                        <input type="text" value={assetType} onChange={(e) => setAssetType(e.target.value)} />
                        {/* <input type=""/> */}
                        {/* <button onClick={getAssets}>Add Asset</button> */}
                        <button onClick={addAsset}>Add Asset</button>
                    </div>
                    <div >
                        <label>String ID:</label>
                        <input type="text" value={byteValue} onChange={(e) => setByteValue(e.target.value)} />
                        <button onClick={handleByte32toString}>Change to string</button>
                        <div className='copy-link'>
                              <input value={stringValuePaste} onChange={(event) => setStringValuePaste(event.target.value)} />
                              <button onClick={handleCopyString}>
                                <span className='copy'><i className="fa-regular fa-copy"></i></span>
                              </button>
                          </div>
                     </div>
                     <div>
                          <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                          />
                          <button onClick={handleGetAsset}>Get Asset</button>
                          {error && <div className="error">{error}</div>}
                          {outputValue && <div>{outputValue}</div>}
                        </div>
                        {/* <input type="text" value="a"/> */}
                    {/* <button onClick={handleGetAsset}>Get Asset</button> */}
                    
                    
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
    export default DigiContent


