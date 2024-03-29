import { useState , useEffect } from "react"

const DisplayMultipleData=()=>{

    let [users,setUsers]=useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch("https://dummyjson.com/users")
            .then(res=>res.json())
            .then((data)=>{
                            console.log(data.users)
                            setUsers(data.users) 
                        })
        },300)
    },[]) 

        return(
            <div>
                {users==null && <h1>Please Wait! data is loading</h1>}
                {users!=null && <div className="card-list" >
                    {
                        users.map((v,i,a)=>{return(<div key={v.id} className="card">
                                                                    <h1>Username:{v.username} </h1>
                                                                    <h2>Age:{v.age}</h2>
                                                                    <h3>Phone: {v.phone}</h3>
                                                                    </div>)})
                        
                        
                    }

                </div>}
                
                


            </div>
        )
}
export default DisplayMultipleData;


