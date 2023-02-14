import React, { useState } from 'react';
import { ethers } from 'ethers';

// const contractAbi = [
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "internalType": "string",
//         "name": "currency",
//         "type": "string"
//       },
//       {
//         "internalType": "uint256",
//         "name": "amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "deposit",
//     "outputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "internalType": "string",
//         "name": "currency",
//         "type": "string"
//       },
//       {
//         "internalType": "uint256",
//         "name": "amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "withdraw",
//     "outputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "internalType": "string",
//         "name": "currency",
//         "type": "string"
//       },
//       {
//         "internalType": "address",
//         "name": "recipient",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "transfer",
//     "outputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   }
// ];

const contractAddress = "0x1234567890123456789012345678901234567890";

function Crypto() {
  const [currency, setCurrency] = useState('');
  const [amount, setAmount] = useState(0);
  const [response, setResponse] = useState(null);

//   const provider = new ethers.providers.Web3Provider(web3.currentProvider);
//   const contract = new ethers.Contract(contractAddress, contractAbi, provider.getSigner());

//   const handleDeposit = async () => {
//     try {
//       const tx = await contract.deposit(currency, amount);
//       setResponse(`Transaction confirmed: ${tx.hash}`);
//     } catch (error) {
//       setResponse(`Error: ${error.message}`);
//     }
//   };

//   const handleWithdraw = async () => {
//     try {
//       const tx = await contract.withdraw(currency, amount);
//       setResponse(`Transaction confirmed: ${tx.hash}`);
//     } catch (error) {
//       setResponse(`Error: ${error.message}`)
//     }
// }
    return (
        <div>
          <input
            type="text"
            placeholder="Currency"
            value={currency}
            onChange={event => setCurrency(event.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={event => setAmount(event.target.value)}
          />
          <button >Deposit</button>
          {/* <button onClick={handleDeposit}>Deposit</button> */}
          <input
            type="text"
            placeholder="Currency"
            value={currency}
            onChange={event => setCurrency(event.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={event => setAmount(event.target.value)}
          />
          <button >Deposit</button>
          {/* <button onClick={handleDeposit}>Deposit</button> */}
          </div>
      )}

      export default Crypto;


