import { Navbar,Nav,NavDropdown } from 'react-bootstrap';
import {Link} from "react-router-dom";
function BCHeader() {
  return (
  <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Navbar.Brand href="/">KOSIGN</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
       <Link to="/issues" className={localStorage.getItem('userid')===null?"rowShowF":"headerlink "}>Issues</Link>
      
       <Link to="/issuesMuted" className={localStorage.getItem('userid')===null?"rowShowF":"headerlink "}>Muted Issues</Link>  
    </Nav>
    <div className={localStorage.getItem('userid')===null?"rowShowF":"rowShowT "}>
    <Nav bg="primary" className="pr-5" >
      <NavDropdown title={<span className=" text-light  my-auto">Dropdown</span> } id="collasible-nav-dropdown">
         
          <NavDropdown.Item 
            onClick={
              ()=>{
                localStorage.removeItem("username");
                localStorage.removeItem("userid");
                localStorage.removeItem("userDepartment");
                window.location.href="/";
                }} >
                  LogOut
          </NavDropdown.Item>
        </NavDropdown>
    </Nav>
    </div>
  </Navbar.Collapse>
</Navbar>
  );
}

export default BCHeader;
