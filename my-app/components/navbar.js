import { Nav, Navbar, Button, Dropdown } from "react-bootstrap";
export default function navbar(){
  return(
    <>
    <Navbar fixed="top" bg="light" expand="lg">
        <div className="container text-center">
          <Navbar.Brand href="https://www.senecacollege.ca/programs/fulltime/BSD.html"><span className="text-danger">BSD</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/curriculum">Curriculum</Nav.Link>
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Students
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Alumni</Dropdown.Item>
                  <Dropdown.Item href="#">Current Students</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
          </div>
        </Navbar>
        <br/><br/><br/>
    </>
  )
}