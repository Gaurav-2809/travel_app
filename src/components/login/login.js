import React, {useState} from 'react'
import "../login/login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Login =({setLoginUser})=>{

    const navigate=useNavigate()

    const [user, setUser]=useState({
        email:"",
        pass: "",
    })

    const handleChange = e=>{
        const {name, value} = e.target
        //console.log(name, value);
        setUser({
            ...user,
            [name]:value
        })
    }

    const login=()=>{
        const {email, pass}=user
        if(email && pass){
            axios.post("http://localhost:9002/login", user)
            .then(function(response){
                alert(response.data.message)
                setLoginUser(response.data.user)
                navigate("/")
            })
            .catch(function(err){
                console.log(err);
            })
        }else{
            alert("invalid")
        }
        
    }
    return(
        <div className='row'>
            {/* {console.log(user)} */}
            <div className='col-sm-4'></div>
            <div className='col-sm-4' style={{marginTop: "5rem"}}>
                <div className='form1' style={{padding: "1rem"}}>
                    <form>
                        <div className='login'>
                            <h2 className='heading'>Login</h2>
                        </div>
                        <div className="form-group" style={{textAlign: "left"}}>
                            <label for="exampleInputEmail1" style={{marginTop: "0.5rem"}}>Email address</label>
                            <input type="email" class="form-control" name="email" value={user.email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{marginTop: "0.5rem"}} onChange={handleChange}/>
                        </div>
                        <div className="form-group" style={{textAlign: "left"}}>
                            <label for="exampleInputPassword1" style={{marginTop: "0.5rem"}}>Password</label>
                            <input type="password" class="form-control" name="pass" value={user.pass} id="exampleInputPassword1" placeholder="Password" style={{marginTop: "0.5rem"}} onChange={handleChange}/>
                        </div>
                        <div onClick={login} class="btn btn-primary" style={{marginTop: "1rem", width:"100%"}}>Login</div>
                        <div className='or'>OR</div>
                        <div onClick={()=>{navigate("/register")}} class="btn btn-primary" style={{width:"100%"}}>Register</div>
                    </form>
                </div>
            </div>
            <div className='col-sm-4'></div>
        </div>
    )
}
export default Login;