// import BCButton from "./button";
import Moment from "react-moment";
import {Button} from "react-bootstrap";
import axios from "axios";
import moment from 'moment';
// import { useState } from "react";
// import "moment/locale/km";
function TableRow(props){ 
    function statusChange(){
       
            axios.patch(global.url+"/issues",{
                "issue_id":props.data.issue_id,
                "muted":false,
                "status":true
            }).then((res)=>{
                alert(res.data.message);
                window.location.reload(true)
            }).catch((error)=>{console.log(error)})
      
    }
    function mutedChange(){
        axios.patch(global.url+"/issues",{
            "issue_id":props.data.issue_id,
            "muted":true,
            "status":false
        }).then((res)=>{
            alert(res.data.message);
            window.location.reload(true)
        }).catch((error)=>{console.log(error)})
    }
    return(
        <tr key={props.data.issue_id}> 
            <td className="id">{props.data.issue_id}</td>
            <td>{props.data.issue_title}</td>
            <td>{props.data.issue_purpose}</td>
            <td>{props.data.username}</td>
            <td>{props.data.department}</td>
            <td>{props.data.priority}</td>
            <td>{props.data.type}</td>
            <td>
                <Moment fromNow >{props.data.created_time}</Moment>
            </td>
            <td>
                {moment(props.data.start_time).calendar()}
            </td>
            <td className="description">{props.data.description}</td>
            <td 
            // className={localStorage.getItem('userDepartment')==="IT Infra"?"rowShowT":"rowShowF"}
            >
            <Button  
                variant="success" 
                
                onClick={statusChange}
            >Close Ticket</Button> 
               
            <Button  
                variant="danger"
                onClick={mutedChange}    
            >Mute Ticket</Button> 
            
           
            </td>
        </tr>)
}
export default TableRow