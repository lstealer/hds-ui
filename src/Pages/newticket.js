import { Form,Col,Button } from "react-bootstrap";
import {useEffect, useState} from 'react';
import axios from "axios";
import "../Components/global"
// import DatePicker from "react-datepicker";

function NewTicket() {


// State
  const [title,setTitle] =useState(''); 
  const [purpose,setPurpose] =useState(''); 
  const [department,setDepartment] = useState("IT Infra");
  const [priority,setPriority] = useState("LOW");
  const [description,setDescription] =useState('');
  const [buttonb,setButtonb] = useState(true);
  const [data,setData] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [type,setType] =useState('Helpdesk/Support/Network');
  // VPN connection
  const [port1,setPort1] =useState('');
  const [source1,setSource1]=useState('');
  const [dest1,setDest1]=useState('');
  // Security
  const [server1,setServer1]=useState('');
  const [server2,setServer2]=useState('');
  const [port2,setPort2]=useState('');
  const [source2,setSource2]=useState('');
  // System/DevOps
  const [appName,setAppName]=useState('');
  const [appVersion,setAppVersion]=useState('');
  const [configuration,setConfiguration]=useState('');
  //Helpdesk/Support/Network
  const [info,setInfo]=useState('');
// Function
  const settingTitle=(evt)=>{
      setTitle(evt.target.value)
      // console.log("direct",title);
   }
  // const settingDepartment=(evt)=>{
  //   setDepartment(evt.target.value)
  // }
  const settingPriority=(evt)=>{
    setPriority(evt.target.value)
  }
  const settingDescription=(evt)=>{
    setDescription(evt.target.value)
  }
  const settingStartDate=(evt)=>{
    setStartDate(evt.target.value) 
  }
  const settingPurpose=(evt)=>{
    setPurpose(evt.target.value)
  }
  const settingType=(evt)=>{
    setType(evt.target.value)
  }
  //HelpDesk
  const settingInfo=(evt)=>{
    setInfo(evt.target.value)
  }
  // VPN
  const settingSource1=(evt)=>{
    setSource1(evt.target.value)
  }
  const settingDest1=(evt)=>{
    setDest1(evt.target.value)
  }
  const settingPort1=(evt)=>{
    setPort1(evt.target.value)
  }
  //Security
  const settingSource2=(evt)=>{
    setSource2(evt.target.value)
  }
  const settingPort2=(evt)=>{
    setPort2(evt.target.value)
  }
  const settingServer1=(evt)=>{
    setServer1(evt.target.value)
  }
  //System/DevOps
  const settingServer2=(evt)=>{
    setServer2(evt.target.value)
  }
  const settingAppName=(evt)=>{
    setAppName(evt.target.value)
  }
  const settingAppVersion=(evt)=>{
    setAppVersion(evt.target.value)
  }
  const settingConfiguration=(evt)=>{
    setConfiguration(evt.target.value)
  }
// Effect
  useEffect(()=>{
    console.log(startDate)
    if(title!==''&&purpose!==''){
      if(type==='Helpdesk/Support/Network'&&info!=='')
        setButtonb(false);
      if(type==='Security'&&source2!==''&&port2!==''&&server1!=='')
        setButtonb(false);
      if(type==='VPN connection to Korea, Japan'&&source1!==''&&port1!==''&&dest1!=='')
        setButtonb(false);
      if(type==='System/DevOps'&&server2!==''&&appName!==''&&appVersion!=='')
        setButtonb(false);
    }
    else
      setButtonb(true);
    setData({
      "issue_title":title,
      "issue_purpose":purpose,
      "priority":priority,
      "type":type,
      "user_id":parseInt(localStorage.getItem("userid")),
      "description":description,
      "start_date":startDate
    })
  },[title,department,priority,description,startDate,type]) 
  useEffect(()=>{
    setInfo('');
    setPort1('');
    setPort2('');
    setServer1('');
    setServer2('');
    setSource1('');
    setSource2('');
    setAppName('');
    setAppVersion('');
    setConfiguration('');
    setDest1('');
    setButtonb(true);
  },[type])

  //New Effect
  useEffect(()=>{
    if(type==='Helpdesk/Support/Network'){
      setDescription(
        '-Object: '+title+
        '\n-Purpose: '+purpose+
        '\n-Request Info: \n'+info
      )
    }
    if(type==='Security'){
      setDescription(
        '-Object: '+title+
        '\n-Purpose: '+purpose+
        '\n-Request Info: \n'+
        '    Server IP: '+server1+
        '\n    Port: '+ port2+
        '\n    Source: '+ source2
      )
    }
    if(type==='VPN connection to Korea, Japan'){
      setDescription(
        '-Object: '+title+
        '\n-Purpose: '+purpose+
        '\n-Request Info: \n'+
        '    Destination: '+dest1+
        '\n    Port: '+ port1+
        '\n    Source: '+ source1
      )
    }
    if(type==='System/DevOps'){
      setDescription(
        '-Object: '+title+
        '\n-Purpose: '+purpose+
        '\n-Request Info: \n'+
        '    Server IP: '+server2+
        '\n    Application Name: '+ appName+
        '\n    Application Version: '+ appVersion+
        '\n    Configuration : ' + configuration
      )
    }
    // console.log(description)
  },[type,title,purpose,info,appName,appVersion,configuration,server2,server1,port1,port2,source1,source2,dest1])
  useEffect(()=>{
    console.log(data)
  },[data])
  //View
  return (
    <div className="container" >
    <div className="mt-0"/>
    <Form >
    <Form.Row >
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Type</Form.Label>
        <Form.Control as="select" defaultValue={type} onChange={settingType}>
          <option>Helpdesk/Support/Network</option>
          <option>Security</option>
          <option>System/DevOps</option>
          <option>VPN connection to Korea, Japan</option> 
        </Form.Control>
      </Form.Group>
    
      <Form.Group as={Col} controlId="formGridEmail">
        
      </Form.Group>
    </Form.Row>
    
    <Form.Row >
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Object</Form.Label>
        <Form.Control  value={title} onChange={settingTitle} placeholder="Ticket Object" />
      </Form.Group>
    </Form.Row>
    <Form.Row >
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>purpose</Form.Label>
        <Form.Control  value={purpose} onChange={settingPurpose} placeholder="Ticket Purpose" />
      </Form.Group>
    </Form.Row>

    {/* Help Desk Network and Support */}
    <div className={type==='Helpdesk/Support/Network'?'rowShowT':'rowShowF'}>
    <Form.Row >
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Request Info</Form.Label>
        <Form.Control  value={info} onChange={settingInfo} placeholder="Requet Information in list details" />
      </Form.Group>
    </Form.Row>
    </div>
    {/* Security */}
    <div className={type==='Security'?'rowShowT':'rowShowF'}>
    <Form.Row >
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Server IP</Form.Label>
        <Form.Control  value={server1} onChange={settingServer1} placeholder="Server IP" />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Server Port</Form.Label>
        <Form.Control  value={port2} onChange={settingPort2} placeholder="Sever's Port" />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Server Source</Form.Label>
        <Form.Control  value={source2} onChange={settingSource2} placeholder="Access Source " />
      </Form.Group>
    </Form.Row>
    </div>

    {/* VPN connection to Korea, Japan */}
    <div className={type==='VPN connection to Korea, Japan'?'rowShowT':'rowShowF'}>
    <Form.Row >
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Destination IP</Form.Label>
        <Form.Control  value={dest1} onChange={settingDest1} placeholder="Server IP" />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Server Port</Form.Label>
        <Form.Control  value={port1} onChange={settingPort1} placeholder="Sever's Port" />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Server Source</Form.Label>
        <Form.Control  value={source1} onChange={settingSource1} placeholder="Access Source " />
      </Form.Group>
    </Form.Row>
    </div>

    {/* System/DevOps */}
    <div className={type==='System/DevOps'?'rowShowT':'rowShowF'}>
    <Form.Row >
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Server IP</Form.Label>
        <Form.Control  value={server2} onChange={settingServer2} placeholder="Server IP" />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Application Name</Form.Label>
        <Form.Control  value={appName} onChange={settingAppName} placeholder="Apllication Name" />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Application Version</Form.Label>
        <Form.Control  value={appVersion} onChange={settingAppVersion} placeholder="Application Version" />
      </Form.Group>
    </Form.Row>
    <Form.Row >
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Application configuration</Form.Label>
        <Form.Control  value={configuration} onChange={settingConfiguration} placeholder="Configuration in list details" />
      </Form.Group>
    </Form.Row>
    </div>
    
    <Form.Row>
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Start Date</Form.Label>
        <input type="date" className='datePickerStyle' selected={startDate} onChange={settingStartDate} />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Departments</Form.Label>
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
      <Form.Group as={Col} controlId="formGridAddress1">
        <Form.Label>Priority</Form.Label>
        <Form.Control as="select" defaultValue={priority} onChange={settingPriority}>
          <option >LOW</option>
          <option >NORMAL</option>
          <option >HIGH</option>
        </Form.Control>
      </Form.Group>
    </Form.Row>
    
    <Form.Row>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description of issue</Form.Label>
            <Form.Control as="textarea" readOnly rows={5} cols={300} value={description} onChange={settingDescription}/>
        </Form.Group>
    </Form.Row>
    <Form.Row>
      <div >
        <Button  variant="primary"  disabled={buttonb} onClick={()=>{
          axios.post(global.url+"/issues",data).then(
            (res)=>{
              alert(res.data.message);
            }
          ).catch((error)=>console.log(error))
          window.location.href="/issues?limit=5&page=1"
        }}>
          Submit
        </Button>
      </div>
    </Form.Row>
  </Form>
  </div>
  );
}

export default  NewTicket;
