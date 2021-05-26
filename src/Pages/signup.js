import axios from 'axios';
import { useEffect, useState } from 'react';
import {Form,Button, Container} from 'react-bootstrap';
import "../Components/global";

const SignUp=()=>{

    //State
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [confirm,setConfirm]= useState('');
    const [department,setDepartment]=useState('IT Infra');
    const [email,setEmail]= useState('');
    const [passwordb,setPasswordb]= useState(true);
    const [buttonb,setButtonb] =useState(true);
    const [data,setData] =useState({});
    //Effect
    useEffect(()=>{
        if(confirm!==password){
            setPasswordb(false);
            setButtonb(true);
        }
        else{
            setPasswordb(true);
            if(username!==''&&email!=='')
                setButtonb(false);
            else
                setButtonb(true);
        }
       
        setData({"username":username,"password":password,"email":email,"department":department})
       
    },[username,password,email,confirm,department]);
    useEffect(()=>{
        //console.log("DATA"," ",data );
    },[data])

    return (
    <Container className="mt-4">
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control  placeholder="Enter user" value={username} onChange={(evt)=>setUsername(evt.target.value)} />
            
        </Form.Group>    
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(evt)=>setEmail(evt.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Text className="text-muted ">
            <p className={passwordb?"warnF":"warnT"}>Password must be matched to confirmation !!!</p>
            </Form.Text>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(evt)=>setPassword(evt.target.value)}/>
           
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={confirm} onChange={(evt)=>setConfirm(evt.target.value)}/>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Department</Form.Label>
            <Form.Control as="select" value={department} onChange={(evt)=>setDepartment(evt.target.value)}>
                <option value={"Mobile R & D"}>Mobile R & D</option>
                <option value={"B2B R & D"}>B2B R & D</option>
                <option value={"Publishing R & D"}>Publishing R & D</option>
                <option value={"IT Infra"}>IT Infra</option>
                <option value={"WABOOKS"}>WABOOKS</option>
                <option value={"E-Biz"}>E-Biz</option>
                <option value={"Scrapping R & D"}>Scrapping R & D</option>
                <option value={"General Management"}>General Management</option>
            </Form.Control>
        </Form.Group>
        <Button variant="primary" disabled={buttonb} onClick={()=>{ 
            axios.post(global.url+'/user',data).then((res)=>{
                console.log("res:",res.data.message);
                alert(res.data.message);
                if(res.data.data!==null)
                window.location.href="/issues?limit=5&page=1"
                //  res.data.message
            }).catch(error=>{console.log(error)})
        }}>
            SignUp
        </Button>
        </Form>
    </Container>
    );
}
export default SignUp;
