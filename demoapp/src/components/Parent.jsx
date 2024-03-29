import { useState } from "react";
import Child from "./Child";
const Parent =() =>{

    let [a,setA] = useState(10);

    return(<>
            <h1>{a}</h1>
            <Child a ={a} b={"hello"}/>
    
    
    
    </>);

    
}
export default Parent;