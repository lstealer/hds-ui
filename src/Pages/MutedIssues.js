import axios from 'axios';
import { useEffect, useState } from 'react';
import Moment from "react-moment";
import moment from 'moment'
import { Table,ButtonGroup,Button,FormControl, Row,Col,Container } from  'react-bootstrap';
// import BCButton from './button'

import BCHeaderText from '../Components/headerString';
// import TableRow from '../Components/tableRow';


function MutedIssues() {
    const [data,setData]=useState([]);
    const [page,setPage]=useState(1);
    useEffect(()=>{
    async function fetchData(){
    if(localStorage.getItem('userDepartment')==="IT Infra"){
          const request = await axios.get(global.url+"/issuesMuted?limit=5&page="+page); 
        //   console.log(request);
          setData(request.data.data);
          return request;
    }
    else{
            const request = await axios.get(global.url+"/issuesMuted?limit=5&page="+page+"&id="+localStorage.getItem('userid')); 
            setData(request.data.data);
            return request;
        }
    }fetchData();
    },[page])
    useEffect(()=>{
        // console.log(data);
        
    },[data])
    function unmutedChange(id){
        // console.log(data)
        // alert(id)
        axios.patch(global.url+"/issues",{
            "issue_id":id,
            "muted":false,
            "status":false
        }).then((res)=>{
            alert(res.data.message);
            window.location.reload(true)
        }).catch((error)=>{console.log(error)})
    }
    // var statusOnchage=()=>{
    //     alert("hellp")
    // }
    
    return (
            <div>
            <Row>
                <Col className="ml-5">
                    <BCHeaderText text="Muted Issues:"/>
                </Col>
            </Row>
                <Row>
                    <Col>
                    <Container fluid>
                        <Table striped bordered hover size="sm"  responsive="sm" >
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Ticket Title</th>
                                <th>Ticket Purpose</th>
                                <th>Username</th>
                                <th>Departments</th>
                                <th>Priority</th>
                                <th>Type</th>
                                <th>Created time</th>
                                <th>Start time</th>
                                <th>Descripetion</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody >
                                {data.map((data,index)=>{
                                    return (
                                        <tr key={data.issue_id}> 
                                            <td className="id">{data.issue_id}</td>
                                            <td>{data.issue_title}</td>
                                            <td>{data.issue_purpose}</td>
                                            <td>{data.username}</td>
                                            <td>{data.department}</td>
                                            <td>{data.priority}</td>
                                            <td>{data.type}</td>
                                            <td>
                                                <Moment fromNow >{data.created_time}</Moment>
                                            </td>
                                            <td>
                                                {moment(data.start_time).calendar()}
                                            </td>
                                            <td className="description">{data.description}</td>
                                            <td>
                                            <Button  
                                                variant="danger"
                                                onClick={unmutedChange.bind(this,data.issue_id)}    
                                            >Unmute Ticket</Button> 
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </Table>
                        <div className="page" >
                        <ButtonGroup aria-label="Basic example">
                            <Button
                                variant="secondary"
                                onClick={()=>{
                                    if(page>1)
                                    setPage(page=>page-1)
                                }}
                            >Previous</Button>
                            <div className="pageText">
                            <FormControl
                                className="m-0  text"
                                type="text"
                                value={page}
                                onChange={(evt)=>{if(evt.target.value>0)setPage(evt.target.value)}}
                                aria-describedby="btnGroupAddon"
                            />
                            </div>
                            <Button variant="secondary"
                                onClick={()=>{
                                    if(data.length>=5)
                                    setPage(page=>page+1)
                                }}
                            >Next</Button>
                        </ButtonGroup> 
                        </div>
                        </Container>
                    </Col>
                </Row>
            </div>
      
    );
  }
  
  export default MutedIssues;
  