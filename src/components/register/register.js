import React,{useState} from 'react'
import "../register/register.css"
import axios from "axios"
import { useNavigate  } from 'react-router-dom'

const Register =()=>{

    const navigate=useNavigate()

    const [user, setUser]=useState({
        name:"",
        email:"",
        pass: "",
        repass:""
    })

    const handleChange = e=>{
        const {name, value} = e.target
        console.log(name, value);
        setUser({
            ...user,
            [name]:value
        })
    }

    const register =()=>{
        const {name, email, pass, repass}= user
        if(name && email && pass && (pass===repass)){
            // alert("posted")
           axios.post("http://localhost:9002/register", user)
           .then(function(response) {
                alert(response.data.message)
                navigate("/login")
            })
          .catch(function(error) {
            console.log(error);
          });
        }else{
            alert("inavlid")
        }
    }
    return(
        <div className='row'>
            {/* {console.log( user)} */}
            <div className='col-sm-4'></div>
            <div className='col-sm-4' style={{marginTop: "5rem"}}>
                <div className='form1' style={{padding: "1rem"}}>
                    <form>
                        <div className='login'>
                            <h2 className='heading'>Register</h2>
                        </div>
                        <div className="form-group" style={{textAlign: "left"}}>
                            <label htmlFor="exampleInputName" style={{marginTop: "0.5rem"}}>Your name</label>
                            <input type="text" className="form-control" name="name" value={user.name} id="exampleInputName" aria-describedby="emailHelp" placeholder="Full Name" onChange={handleChange} style={{marginTop: "0.5rem"}}/>
                        </div>
                        <div className="form-group" style={{textAlign: "left"}}>
                            <label htmlFor="exampleInputEmail1" style={{marginTop: "0.5rem"}}>Email address</label>
                            <input type="email" className="form-control" name="email" value={user.email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChange} style={{marginTop: "0.5rem"}}/>
                        </div>
                        <div className="form-group" style={{textAlign: "left"}}>
                            <label htmlFor="exampleInputPassword1" style={{marginTop: "0.5rem"}}>Password</label>
                            <input type="password" className="form-control" name="pass" value={user.pass} id="exampleInputPassword1" placeholder="Password" onChange={handleChange} style={{marginTop: "0.5rem"}}/>
                        </div>
                        <div className="form-group" style={{textAlign: "left"}}>
                            <label htmlFor="exampleInputPassword1" style={{marginTop: "0.5rem"}}>Re Type Password</label>
                            <input type="password" className="form-control" name="repass" value={user.repass} id="exampleInputPassword2" placeholder="Password" onChange={handleChange} style={{marginTop: "0.5rem"}}/>
                        </div>
                        <div onClick={register} className="btn btn-primary" style={{marginTop: "1rem", width:"100%"}}>Register</div>
                        <div className='or'>OR</div>
                        <div onClick={()=>navigate("/login")} className="btn btn-primary" style={{width:"100%"}}>Login</div>
                    </form>
                </div>
            </div>
            <div className='col-sm-4'></div>
        </div>
    )
}
export default Register;