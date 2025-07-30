import React, { useEffect, useState } from "react";

function About()
{
    const [emp, setEmp] = useState({});
    useEffect(()=>{
        if(sessionStorage.getItem("empinfo")!=null)
        {
            console.log("Emp Info");
            let empObj = sessionStorage.getItem("empinfo"); 

            setEmp(JSON.parse(empObj));
            console.log(emp);
        }
    },[emp]);

    return(
        <div>
            <h1 style={{textAlign:"center"}}>About Page</h1>
            <h2>Employee Name :  {emp.ename}</h2>
            <h2>Employee Job :  {emp.job}</h2>
        </div>
    );
}

export default About;