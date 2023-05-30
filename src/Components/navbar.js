import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const navbar = () => {
  return (
    <Navbar bg="white" expand="sm" style={{borderRadius:'50px'}} className='p-2'>
      <Container fluid>
        <Navbar bg="light" variant="light   ">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top bg-white"
            />          </Navbar.Brand>
        </Container>
      </Navbar>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 text-dark"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='text-dark'>Home</Nav.Link>
            <Nav.Link href="#action2" className='text-dark' style={{fontWeight:'bold', borderBottom:"2px solid blue"}}>My campaign</Nav.Link>
          </Nav>
           <Nav>
            <Nav.Link className='text-dark' href="#deets"><i className="ri-notification-2-fill"></i></Nav.Link>
            <Nav.Link className='text-dark' eventKey={2} href="#memes">
              <i className="ri-user-line p-2" style={{background:'grey',borderRadius :"50%",color:"white"}}></i>
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;