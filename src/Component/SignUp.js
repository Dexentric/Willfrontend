import { useState } from "react";
import { Link } from "react-router-dom";
function SignIn() {
    const [user,setUser]= useState()
    const [psd,setPsd]= useState()
    const [confirm,setConfirm] = useState()
    const [email,setEmail] = useState()
    const [match,setMatch] = useState()
    // useEffect(() => {
            
    // }, [])
    
    const handleSign=(e)=>{
            e.preventDefault();
            
    }
    return ( 
        <div className="formSign">
             <form onSubmit={handleSign}>
                 <label >Company Name</label>
                 <input type="text" value={user} placeholder="Company Name" onChange={(e)=>setUser(e.target.value)} required/>
                 <label >Email</label>
                 <input type="email" value={email} placeholder="email" onChange={(e)=>setEmail(e.target.value)} required/>
                 <label >Password</label>
                 <input type="password" value={psd} placeholder="password" onChange={(e)=>setPsd(e.target.value)} required />
                 <label >confirm Password</label>
                 <input type="password" value={confirm} placeholder="password" onChange={(e)=>setConfirm(e.target.value)} required/>
                 <button type="submit">sign up</button>
                 <span>if you dont have account <Link to="/login">log in</Link></span>
             </form>
             
        </div>
     );
}

export default SignIn;