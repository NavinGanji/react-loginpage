import React,{useState} from 'react'
import Compo1 from "./Compo1"
import Compo2 from "./Compo2"
import Compo3 from "./Compo3"
function Container() {
    const main=()=>{
        setpage(<Compo3 onclick={main1}></Compo3>)
    }

    const main1=()=>{
        setpage(<Compo2 onclick={main}></Compo2>)
    }
    const [page, setpage] = useState(<Compo2 onclick={main}></Compo2>)

    
    return (
        <div className="container">
            <div className="row">


            <Compo1></Compo1>
            {page}
            
            </div>
           
        </div>
    )
}

export default Container
