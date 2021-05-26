import {useState,useEffect} from 'react';
import {Form,Button} from 'react-bootstrap';
import axios from 'axios';
import BCHeaderText from '../Components/headerString';
import "../Components/global";
import {Link} from "react-router-dom";
// import logo from '../kosign_logo_800x323.png';
const Login=()=>{
    const [loginb,setLoginb]=useState(false);
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [data,setData]=useState({});
    
    useEffect(()=>{
        setData({"username":username,"password":password});
    },[username,password])
  
    useEffect(()=>{
    //    console.log(data);
       
    },[data])
    


    return(
        
        <div className='container' >
            {/* <img src ={logo} width='50vw' alt="bubbles"></img> */}
            <div className='m-5 background p-5'>
                <BCHeaderText text='Login' color='primary'/>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control  
                            placeholder="Enter Username"
                            value={username}
                            onChange={evt=>{setUsername(evt.target.value);}} 
                        />
                        <Form.Text className="text-muted" >
                            <p className={loginb?"warnT":"warnF"}>
                                 username or password is invalid!!!
                             </p>
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password"
                            value={password}
                            onChange={(evt)=>{setPassword(evt.target.value);}} 
                        />
                    </Form.Group>
                   
                    <Button variant="primary" className="" onClick={()=>{
                        axios.post(global.url+"/login",data).then((res)=>{
                            // console.log("res:",res);
                            alert(res.data.message);
                            localStorage.setItem('username',res.data.data.username);
                            localStorage.setItem('userid',res.data.data.userId);
                            localStorage.setItem('userDepartment',res.data.data.department);
                            window.location.href ="/"
                        }).catch(error=>{console.log(error)})
                    }} >
                        Login
                    </Button>
                   
                </Form>
                <div className="divSignUpCenter">
                    <p className="signUpAsk">Don't have account yet ?  </p>
                    <Link className='signUP' to="/signup" >Create New Accounts</Link>
                </div>
            </div>
        </div>
    );
}
export default Login;
