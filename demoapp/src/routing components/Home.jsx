import {useEffect} from "react";

const Home = ()=> {
        useEffect (()=>{
                console.log("fetch data from db");
                let timer = setTimeout(()=>{console.log("and save to state");},5000);
                return ()=>{clearTimeout(timer)} //cleanup functions
        },[])

        return (<div>
                    <h1>Home components</h1>
            </div>


        )
}
export default Home;