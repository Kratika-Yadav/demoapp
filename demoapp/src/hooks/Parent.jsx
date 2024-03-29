
import { useReducer } from "react";
import Child from "./Child";

// export let UserContex = createContext()

// const Parent = () => {
//     console.log("parent comp rendered");
//     let[count, setCount] = useState(10);
//     return(<div>
//         <h1>This is a parent component</h1>
//         <h2 onClick={()=>{setCount(count+10)}}>count</h2>
//         <hr/>
// <UserContex.Provider value={count}>
//     <Child/>
// </UserContex.Provider>

//     </div>);
// }

let initstate = {c1:1,c2:10,c3:100};

let reducer = {prvState, action} =>{
    switch(action.type){
       case "incrementc1":return{...prvState,c1:prvState.c1+1};
       case "decrementc1":return{...prvState,c1:prvState.c1-1};

       case "incrementc2":return{...prvState,c2:prvState.c2+10};
       case "decrementc2":return{...prvState,c2:prvState.c2-10};

       case "incrementc3":return{...prvState,c3:prvState.c3+100};
       case "decrementc3":return{...prvState,c3:prvState.c3+100};
      

    }
}
const Parent = () =>{
    let[state,dispatch]=useReducer(reducer,initstate);
    return(<div>
                <h1>c1:{state.c1}</h1>
                <button onClick={()=>{dispatch({type:"incrementc1"})}}>+</button>
                <button onClick={()=>{dispatch({type:"derementc1"})}}>-</button>
                <hr/>

                <h1>c2:{state.c2}</h1>
                <button onClick={()=>{dispatch({type:"incrementc2"})}}>+</button>
                <button onClick={()=>{dispatch({type:"derementc2"})}}>-</button>
                <hr/>

                <h1>c3:{state.c3}</h1>
                <button onClick={()=>{dispatch({type:"incrementc3"})}}>+</button>
                <button onClick={()=>{dispatch({type:"derementc3"})}}>-</button>
                <hr/>
    </div>)
}
export default Parent;