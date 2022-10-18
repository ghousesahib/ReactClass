import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from '../Page/Home';
import logo from '../image/logo.jpg';
function Header() {
  return (
   <>
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><img src={logo} alt="First slide" style={{width:'300'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link className="nav-link " to="/">Home</Link></Nav.Link>
            <Nav.Link ><Link className="nav-link " to="/About">About</Link></Nav.Link>
            <Nav.Link > <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item ><Link className="nav-link " to="/Main">Air</Link></NavDropdown.Item>
              <NavDropdown.Item><Link className="nav-link " to="/Main">Land</Link></NavDropdown.Item>
             </NavDropdown> </Nav.Link > 
            <Nav.Link ><Link className="nav-link " to="/Slider">Home</Link></Nav.Link>
            <Nav.Link ><Link className="nav-link " to="/Main">About</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
  );
}

export default Header;