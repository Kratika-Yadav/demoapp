import { useState , useEffect } from "react"

const DisplayRes=()=>{

    let [recipes,setRecipes]=useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch("https://dummyjson.com/recipes")
            .then(res=>res.json())
            .then((data)=>{
                            console.log(data.recipes)
                            setRecipes(data.recipes) 
                        })
        },3000)
    },[]) 

        return(
            <div>
                {recipes==null && <h1>Please Wait! data is loading</h1>}
                {recipes!=null && <div className="card-list" >
                    {
                        recipes.map((v,i,a)=>{return(<div key={v.id} className="card">
                                                                    
                                                                    <h1>Recipes:{v.recipes} </h1>
                                                                    <h2>Ingredients:{v.ingredients}</h2>
                                                                    <h3>Name: {v.name}</h3>
                                                                    </div>)})
                        
                        
                    }

                </div>}
                
                


            </div>
        )
}
export default DisplayRes;


