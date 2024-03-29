import{Component, component} from "react";
class Statemanagement extends Component
{
    constructor()
    {
        super()
        this.state={count1:10,count:100}
    }
    render()
    {
        return(
            <div>
                <h1>This is na class component</h1>
                <h1>count1:{this.state.count}</h1>
                <button onClick={()=>{this.setState({count:this.state.count1+10}) }}>
                    inc count1
                </button>
            </div>
        )
    }
}
export default Statemanagement;




