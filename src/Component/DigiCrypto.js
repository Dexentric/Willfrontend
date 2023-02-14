import React, { useState } from 'react';
import { ethers } from 'ethers';
function DigiCrypto() {
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
        <div className="exchangeBody">
            <button className="cryptoConnect">Connect</button>
            <div className="exchange">
                <div  className="transaction deposit">
                    <h3>Deposit</h3>
                    {/* <input type="number" placeholder="input the amount of crypto currenct"/> */}
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
          {/* <button >Deposit</button> */}
          {/* <button onClick={handleDeposit}>Deposit</button> */}
                    <button>Submit</button>
                </div>
                {/* <hr style={{border:"1px solid red"}}/> */}
                {/* <hr style={{border:"1px solid red"}}/> */}
                <div className="transaction withdraw">
                    <h3>Withdraw</h3>
                    {/* <input type="number" placeholder="input the amount of crypto currenct"/> */}
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
          {/* <button >Deposit</button> */}
          {/* <button onClick={handleDeposit}>Deposit</button> */}
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default DigiCrypto;
