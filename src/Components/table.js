import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table,ButtonGroup,Button,FormControl } from  'react-bootstrap';
// import BCButton from './button'

import TableRow from './tableRow';


function BCTable() {
    const [data,setData]=useState([]);
    const [page,setPage]=useState(1);
    useEffect(()=>{
        
      async function fetchData(){
        setData([]);
        if(localStorage.getItem("userDepartment")==="IT Infra"){
            console.log("IT Infra")
        const request = await axios.get(global.url+"/issues?limit=5&page="+page); 
        //   console.log("IT Infra");
          setData(request.data.data);
          return request;}
        else{
        const request = await axios.get(global.url+"/issuesUser?limit=5&page="+page+"&id="+localStorage.getItem("userid"));
            console.log(request)
            setData(request.data.data);
            return request;
        }
      }
      fetchData();
    },[page])
    useEffect(()=>{
        // console.log(data);
        
    },[data])
    var statusOnchage=()=>{
        alert("hellp")
    }
    
    return (
            <div>
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
                    <th
                        // className={localStorage.getItem('userDepartment')==="IT Infra"?"rowShowT":"rowShowF"} 
                    >Action</th>
                </tr>
                </thead>
                <tbody >
                    {data.map((data,index)=>{
                        return <TableRow  data={data} func={statusOnchage}/>
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
            </div>
      
    );
  }
  
  export default BCTable;
  