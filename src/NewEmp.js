import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

function NewEmp()
{    
    const [formErrors, setFormErrors] = useState({});
    const nagivate = useNavigate();
    const [emp, setEmp] = useState(
        {
            eid:0,
            ename:'',
            job:'',
            salary:0.0,
            email:'',
            pswd:''
        }
    )

    const getEmpInfo = (e) =>{
        e.preventDefault();
        if(Validations()===true)
        {
            console.log(emp);

            sessionStorage.setItem("empinfo", JSON.stringify(emp));
            nagivate('/about')
        }
    }

    const Validations = ()=>{
        const errors = {};
        let flag = true;
        if(emp.eid===0)
        {
            errors.idErr = "Emp Number is Required!";
            flag = false;
        }
        if(emp.ename==="")
        {
            errors.enameErr = "Emp Name is Required!";
            flag = false;
        }
        if(emp.job==="")
        {
            errors.jobErr = "Emp Job is Required!";
            flag = false;
        }
        if(emp.salary===0.0)
        {
            errors.salErr = "Emp Sal is Required!";
            flag = false;
        }
        if(emp.email==="")
        {
            errors.emailErr = "Email is Required!";
            flag = false;
        }

        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
        if(!regex.test(emp.email))
        {
            errors.emailInvalidErr = "Email is not Valid";
            flag = false;
        }

        if(emp.pswd==="")
        {
            errors.pwdErr = "Password is Required!";
            flag = false;
        }

        let pwdlength = emp.pswd.length;
        if(!(pwdlength>= 8 && pwdlength<=20))
        {
            errors.pwdlenErr = "Password must be b/w 8 - 20 chars only";
            flag = false;
        }

        console.log(errors);
        setFormErrors(errors);
        return flag;
    }

    return(
        <div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <b>New Employee Registration</b>
                        </div>
                        <div className="card-body">
                            <form method="post" name="frmReg" onSubmit={getEmpInfo}>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Emp ID</label>
                                    <input type="text" className="form-control"
                                        onChange={(e)=>{setEmp({...emp,eid:e.target.value})}} />
                                    <p style={{"color":"red"}}>{formErrors.idErr}</p>
                                </div>
                                <div className="col-md-6">
                                    <label>Emp Name</label>
                                    <input type="text" className="form-control"
                                    onChange={(e)=>{setEmp({...emp,ename:e.target.value})}} />
                                    <p style={{"color":"red"}}>{formErrors.enameErr}</p>
                                </div>    
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <label>Emp Job</label>
                                    <input type="text" className="form-control" 
                                    onChange={(e)=>{setEmp({...emp,job:e.target.value})}} />
                                    <p style={{"color":"red"}}>{formErrors.jobErr}</p>
                                </div>
                                <div className="col-md-6">
                                    <label>Emp Salary</label>
                                    <input type="text" className="form-control"
                                    onChange={(e)=>{setEmp({...emp,salary:e.target.value})}} />
                                    <p style={{"color":"red"}}>{formErrors.salErr}</p>
                                </div>    
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Emp Email</label>
                                    <input type="email" className="form-control" 
                                   onChange={(e)=>{setEmp({...emp,email:e.target.value})}} />
                                   <p style={{"color":"red"}}>{formErrors.emailErr}</p>
                                </div>
                                <div className="col-md-6">
                                    <label>Email Password</label>
                                    <input type="text" className="form-control" 
                                    onChange={(e)=>{setEmp({...emp,pswd:e.target.value})}} />
                                    <p style={{"color":"red"}}>{formErrors.pwdErr}</p>
                                    <p style={{"color":"red"}}>{formErrors.pwdlenErr}</p>
                                </div>    
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <br />
                                    <input type="submit" className="btn btn-primary" value="Click Me" />
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
}

export default  NewEmp;