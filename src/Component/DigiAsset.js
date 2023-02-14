// import AssetCollect from "./DigitAssetInput";

// function DigitalAsset() {
//     return (  
//         <div>
//             <h1>we provide </h1>
//             <p>
//                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//                     aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
//                     dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//                     sunt in culpa qui officia deserunt mollit anim id est laborum.
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             </p>
//             <AssetCollect/>
//         </div>
//     );
// }

// export default DigitalAsset;

import React, {useState, useEffect} from 'react';
// import './App.css';
import FileUploadScreen from '../screens/FileUploadScreen';
// import FileUploadScreen from './screens/FileUploadScreen';
import {getSingleFiles, getMultipleFiles} from '../data/api';
// import {getSingleFiles, getMultipleFiles} from './data/api';
import {signup, login} from '../data/authapi';
// import Authentication from './screens/AuthScreen';

function DigitalAsset() {
  const [singleFiles, setSingleFiles] = useState([]);
  const [multipleFiles, setMultipleFiles] = useState([]);
  // const [formData, setFormData] = useState({
  //   companyName:'',
  //   email: '',
  //   password: '',
  // });
  
  
  const getSingleFileslist = async () => {
    try {
        const fileslist = await getSingleFiles();
        setSingleFiles(fileslist);
    } catch (error) {
      console.log(error);
    }
  }
  const getMultipleFilesList = async () => {
    try {
        const fileslist = await getMultipleFiles();
        setMultipleFiles(fileslist);
        console.log(multipleFiles);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getSingleFileslist();
    getMultipleFilesList();
  }, []);
  return (
    <>
      {/* <div> */}
      {/* <Authentication /> */}
      {/* </div>  */}
        <div className="container">
          <h3 className="text-danger font-weight-bolder border-bottom text-center">Upload Your Documents </h3>
          <FileUploadScreen getsingle={() => getSingleFileslist()} getMultiple={() => getMultipleFilesList()}/>
       </div> 
       <div className="container-fluid mt-5">
         <div className="row">
           <div className="col-6">
             <h4 className="text-success font-weight-bold">Single Files Upload</h4>
             <div className="row">
                {singleFiles.map((file, index) => 
                  <div className="col-6">
                    <div className="card mb-2 border-0 p-0">
                      <img src={`http://localhost:8000/${file.filePath}`} height="200" className="card-img-top img-responsive" alt="img"/>
                      </div>
                  </div>
                )}
             </div>
           </div>
           <div className="col-6">
             <h4 className="text-success font-weight-bold">Multiple Files Upload</h4>
             {multipleFiles.map((element, index) =>
                <div key={element._id}>
                    <h6 className="text-danger font-weight-bold">{element.title}</h6>
                    <div className="row">
                      {element.files.map((file, index) =>
                        <div className="col-6">
                            <div className="card mb-2 border-0 p-0">
                              <img src={`http://localhost:8000/${file.filePath}`} height="200" className="card-img-top img-responsive" alt="img"/>
                              </div>
                          </div>
                       )}
                      </div>
                </div>
              )}
           </div>
         </div>
       </div>
    </>
  );
}

export default DigitalAsset;
