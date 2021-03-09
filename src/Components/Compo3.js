import React,{useState} from 'react'
import logo1 from "./LogoMakr-7gcb0S.png"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
function Compo3(props) {
    const [color, setcolor] = useState()
    const [colorpass, setcolorpass] = useState()
    const [info, setinfo] = useState({
        fname:"",
        email:"",
        password:""
    })
    const changeinfo=(event)=>{
     const {name,value}=event.target
    setinfo((prev)=>{
        return {
            ...info,
            [name]:value
        }
    })
     }
    
    
    
    const submit=(event)=>{
      const regx = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/
      const repass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/
﻿
        if (info.fname.length<1){
          alert("Name cannot be empty")
          setcolor({border:"1px solid red"})
          event.preventDefault()
        }
        else if (regx.test(info.fname)==false){
          alert("Invalid Fullname")
          setcolor({border:"1px solid red"})
          event.preventDefault()
        }

        else if (repass.test(info.password)==false){
          alert("Invalid Password: Password must be atleast eight characters including one uppercase letter, one special character and alphanumeric characters")
         
          setcolor()
          setcolorpass({border:"1px solid red"})
          event.preventDefault()
        }
        else{
          Swal.fire({
            icon: 'success',
            title: 'Done',
            text: 'Registered Successfully :)',
            
          })
          setcolorpass()
          setcolor()
          setinfo(()=>{
            return{
              fname:"",
              email:"",
              password:""
            }
          })
          event.preventDefault()
        }

    }
    return (
        <div className="col-md-6 detail" id="signup">
                <form onSubmit={submit}>
                    <img className="img-fluid " height="200" width="200" src={logo1} alt=""/>
                    <h3 className="mt-3" >Lets be a part of us</h3>
                    <div className="form-group mt-4" >
                  
                      <input type="text" className="form-control shadow-none" id="exampleInputName" placeholder="Enter Your First And Last Name" onChange={changeinfo} name="fname" value={info.fname} style={color}/>
                    </div>
                    <div className="form-group mt-4">
                  
                      <input type="email" className="form-control shadow-none" id="exampleInputEmail2" onChange={changeinfo} value={info.email} name="email"  placeholder="Enter email"/>
                    </div>
                    <div className="form-group mt-4" >
                      
                      <input type="password" className="form-control shadow-none" onChange={changeinfo} value={info.password} name="password" id="exampleInputPassword2" placeholder="Create Password" style={colorpass}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                   
                    <p className="text-primary sign mt-3" onClick={props.onclick} >Already have an Account?</p>
                  </form>
            </div>
    )
}

export default Compo3
