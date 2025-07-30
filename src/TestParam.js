import React from "react";
import { useParams } from "react-router-dom";

function TestParam()
{
    const {personName} = useParams();

    return(
        <div>
                <h1>{personName}</h1>
        </div>
    );
}

export default TestParam;