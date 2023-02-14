// import Body from "./Body";

import { Link } from "react-router-dom";

// import Header from "./Header";
const Landing=()=> {
    return ( 
        <div className="landing">
          <div className="landCard">
             <img src={require("../image/a.jpg")} alt=""/>
             <div className="cardContent">
                  <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                          sunt in culpa qui officia deserunt mollit anim id est laborum.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                   <button type=""><Link to="/asset">dital Asset</Link></button>
            </div>
          </div>
          <div className="landCard">
             <img src={require("../image/digit.jpg")} alt=""/>
             <div className="cardContent">
                    <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <button type=""><Link to="/currency">digital currency</Link></button>
              </div> 
          </div>
        </div>
     );
}

export default Landing;