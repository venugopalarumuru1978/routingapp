import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login()
{
    const [uname, setuname] = useState('');
    const [pwd, setPwd] = useState('');
    
    const navigage = useNavigate()
    
    const userHandler = (event)=>{
        setuname(event.target.value);
    }

    const btnFun = () =>{
        //alert("Username :" + uname + "<br />Password : " + pwd);
        if(uname==="Venugopal"  &&  pwd==="v@123")
            navigage('/welcome')
        else
            alert("Please check usernmae / password")
    }

    return(
        <div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <p><b>Login Here</b></p>
                        </div>
                        <div className="card-body">
                            <label>Username</label>
                            <input type="text"  className="form-control" value={uname} onChange={userHandler} />
                            <br />
                            <label>Password</label>
                            <input type="password"  className="form-control" value= {pwd } onChange={(event)=>{setPwd(event.target.value)}} />
                            <br />
                            <input type="submit"  value="Click Me"  className="btn btn-primary" onClick={btnFun} />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                   
                </div>
            </div>
        </div>
    );
}

export default Login;