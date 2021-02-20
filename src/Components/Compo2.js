import React,{useState} from 'react'
import logo1 from "./LogoMakr-7gcb0S.png"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
function Compo2(props) {
  const [info, setinfo] = useState({
    fname:"",
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
 const onsubmit=(event)=>{
  Swal.fire({
    icon: 'success',
    title: 'Welcome!',
    text: 'Signed In :)',
    
  })
  setinfo(()=>{
    return {
      fname:"",
      password:""
    }
  })
  event.preventDefault()

 }
    return (
        <div id="signin" className="col-md-6 detail" >
                <form onSubmit={onsubmit}>
                    <img className="img-fluid " height="200" width="200" src={logo1} alt=""/>
                    <h3 className="mt-4">Sign In To Your Account</h3>
                    <div className="form-group mt-4">
                      <input type="email" className="form-control shadow-none" onChange={changeinfo} name="fname" value={info.fname} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group mt-2" >
                      <input type="password" className="form-control shadow-none" onChange={changeinfo} name="password" value={info.password}id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                   <a href=""><p className="text-muted mt-3">Forgot Password?</p></a>
                   <p className="text-primary sign" onClick={props.onclick}>Don't have an account? Register here</p>
                   {/* <button className="btn btn-white sign shadow-none" onClick={props.onclick} >Don't have an account? Register here</button> */}
        
                  </form>
            </div>
    )
}


export default Compo2
