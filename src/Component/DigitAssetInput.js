// import React,{useState} from 'react';
// import {useDropzone} from 'react-dropzone'
// function AssetCollect() {
//     const [file,setFile]= useState([])
//     const {getRootProps,getInputProps}=useDropzone({
//         accept:"image/*" 
//     })
//     return (  
//         <>
//             <input type="file" />
              
//         </>
//     );
// }

// export default AssetCollect;
// import React, { useState } from 'react';
// import Draggable from 'react-draggable';

// const  AssetCollect = () => {
//   const [draggedItem, setDraggedItem] = useState(null);

//   const handleStart = (e, data) => {
//     setDraggedItem(data);
//   };

//   const handleStop = (e, data) => {
//     setDraggedItem(null);
//   };

//   return (
//     <div>
//         <h1>folly</h1>
//       {draggedItem && (
//         <Draggable
//           position={draggedItem.position}
//           onStart={handleStart}
//           onStop={handleStop}
//         >
//           <div style={{ width: 100, height: 100, backgroundColor: 'red' }} />
//         </Draggable>
//       )}
//     </div>
//   );
// };

// export default AssetCollect;

import React, { useState } from 'react';

const AssetCollect = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const imageDrop = (event) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files[0];
        const reader = new FileReader();
    
        reader.onload = () => {
          setImage(reader.result);
        };
    
        reader.readAsDataURL(droppedFile);
      };

  return (
    <>
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    //   onDrop={imageDrop}
      style={{ width: '200px', height: '200px', border: '1px solid black' }}
    >
      {file && (
        <div>
          <p>{file.name}</p>
        </div>
      )}      
    </div>
     <div
           onDrop={imageDrop}
           onDragOver={handleDragOver}
           style={{ width: '200px', height: '200px', border: '1px solid black' }}
         >
           {image && (
             <img src={image} alt="dropped image" style={{ maxWidth: '100%' }} />
           )}
         </div>
         </>
  );
};

export default AssetCollect;
{/* import React, { useState } from 'react'; */}

// const MyComponent = () => {
//   const [image, setImage] = useState(null);

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const droppedFile = event.dataTransfer.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       setImage(reader.result);
//     };

//     reader.readAsDataURL(droppedFile);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <div
//       onDrop={handleDrop}
//       onDragOver={handleDragOver}
//       style={{ width: '500px', height: '500px', border: '1px solid black' }}
//     >
//       {image && (
//         <img src={image} alt="dropped image" style={{ maxWidth: '100%' }} />
//       )}
//     </div>
//   );
// };

// export default MyComponent;

