
import BCHeaderText from '../Components/headerString'
import BCTable from '../Components/table'
import {Container, Row, Col } from 'react-bootstrap';
// import BCButton from '../Components/button';
import {Link} from "react-router-dom";
// import { useState } from 'react';



function Home() {
  // const [data,setData]=useState([]);
  return (
    <div>
        <Row>
          <Col className="ml-5">
            <BCHeaderText text="Unsloved Issues:"/>
          </Col>
          <Col>
            <div className="mt-4 mr-3 h-50 float-right">
              <Link to="/newticket" className="btn btn-primary">Add Ticket</Link>
            </div>
          </Col>
        </Row>
        <Row >
          <Col >
            <Container fluid>
              <BCTable />
            </Container>
          </Col>
        </Row> 
    </div>
  );
}

export default  Home;
