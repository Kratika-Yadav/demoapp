import {memo,useContext} from "react";
import { UserContex } from "./Parent";
const Greatgrandchild=()=>{
    console.log("great grand child rendered");
    let count = useContext(UserContex);
    return(<div>
        <h1>this is a great grand child component</h1>
        <h2>count{count}</h2>
    </div>)
}
export default memo(Greatgrandchild);
