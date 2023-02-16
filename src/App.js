// import React, {useState, useEffect} from 'react';
import './App.css';
// import FileUploadScreen from './screens/FileUploadScreen';
// import {getSingleFiles, getMultipleFiles} from './data/api';
// import {signup, login} from './data/authapi';
// // import Authentication from './screens/AuthScreen';

// function App() {
//   const [singleFiles, setSingleFiles] = useState([]);
//   const [multipleFiles, setMultipleFiles] = useState([]);
//   // const [formData, setFormData] = useState({
//   //   companyName:'',
//   //   email: '',
//   //   password: '',
//   // });
  
  
//   const getSingleFileslist = async () => {
//     try {
//         const fileslist = await getSingleFiles();
//         setSingleFiles(fileslist);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   const getMultipleFilesList = async () => {
//     try {
//         const fileslist = await getMultipleFiles();
//         setMultipleFiles(fileslist);
//         console.log(multipleFiles);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   useEffect(() => {
//     getSingleFileslist();
//     getMultipleFilesList();
//   }, []);
//   return (
//     <>
//       {/* <div> */}
//       {/* <Authentication /> */}
//       {/* </div>  */}
//         <div className="container">
//           <h3 className="text-danger font-weight-bolder border-bottom text-center">Upload Your Documents </h3>
//           <FileUploadScreen getsingle={() => getSingleFileslist()} getMultiple={() => getMultipleFilesList()}/>
//        </div> 
//        <div className="container-fluid mt-5">
//          <div className="row">
//            <div className="col-6">
//              <h4 className="text-success font-weight-bold">Single Files Upload</h4>
//              <div className="row">
//                 {singleFiles.map((file, index) => 
//                   <div className="col-6">
//                     <div className="card mb-2 border-0 p-0">
//                       <img src={`http://localhost:8000/${file.filePath}`} height="200" className="card-img-top img-responsive" alt="img"/>
//                       </div>
//                   </div>
//                 )}
//              </div>
//            </div>
//            <div className="col-6">
//              <h4 className="text-success font-weight-bold">Multiple Files Upload</h4>
//              {multipleFiles.map((element, index) =>
//                 <div key={element._id}>
//                     <h6 className="text-danger font-weight-bold">{element.title}</h6>
//                     <div className="row">
//                       {element.files.map((file, index) =>
//                         <div className="col-6">
//                             <div className="card mb-2 border-0 p-0">
//                               <img src={`http://localhost:8000/${file.filePath}`} height="200" className="card-img-top img-responsive" alt="img"/>
//                               </div>
//                           </div>
//                        )}
//                       </div>
//                 </div>
//               )}
//            </div>
//          </div>
//        </div>
//     </>
//   );
// }

// export default App;
import React from 'react';
import Header from "./Component/Header"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from './Component/Body';
import Footer from './Component/Footer';
import Landing from './Component/Landing';
import LoginIn from './Component/Login';
import SignUp from './Component/SignUp';
import DigitalAsset from './Component/DigiAsset';
import DigiCrypto from './Component/DigiCrypto';
import DigitalCrendential from './Component/DigiCredential';
import Crypto from './Component/Crypto';
import DigiContent from './Component/DigiContent';
import "./fontAwesome/css/all.css"
// import DigiContent from './Contract/AssetManagement.json';
function App() {
  return (  
    <React.Fragment>
        <Router>
          <Header/>
           <Routes>
                <Route path="/" element={<Body/>}/>
                <Route path="/Login" element={<LoginIn/>}/>
                <Route path="/SignUp" element={<SignUp/>}/>
                <Route path="/landing" element={<Landing/>}/>
                <Route path="/asset" element={<DigitalAsset/>}/>
                <Route path="/crypto" element={<DigiCrypto/>}/>
                <Route path="/credential" element={<DigitalCrendential/>}/>
                <Route path="/cry1" element={<Crypto/>}/>
                <Route path="/content" element={<DigiContent/>}/>
           </Routes>
           <Footer/>
        </Router>
    </React.Fragment>
  );
}
// import DigiContent from './Component/DigiContent';

export default App;
