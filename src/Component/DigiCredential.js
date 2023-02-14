// import React, { useState } from 'react';
// function DigitalCrendential() {
//             // ! copied
//     const [copied, setCopied] = useState(false)
//     // !paste
//     const [text, setText] = useState('');
//     //   !copy function
//     const copyText = async () => {
//         try {
//           await navigator.clipboard.writeText("Text to be copied");
//           setCopied(true);
//         } catch (err) {
//           console.error("Failed to copy text: ", err);
//         }
//       };
//     //   !paste
//     const pasteText = async () => {
//         try {
//           const clipboardText = await navigator.clipboard.readText();
//           setText(clipboardText);
//         } catch (err) {
//           console.error("Failed to paste text: ", err);
//         }
//       };
    
//     return (  
//         <div className="credentialeBody">
//         <button className="cryptoConnect">Connect</button>
//         <div className="credentail">
//             <h3>Hash credentail</h3>
//             <input type="text"/>
//             <textarea rows="" cols="">
                
//             </textarea>
//             <button onClick={copyText}>
//         {copied ? "Copied!" : "Copy to Clipboard"}
//       </button>
//         </div>
//         <div>
//       <button onClick={pasteText}>Paste from Clipboard</button>
//       <p>{text}</p>
//     </div>
//     </div>
//     );
// }

// export default DigitalCrendential ;