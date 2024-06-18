import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="Navbar">
      <Container>
        <div NavbarName>
        <Navbar.Brand className = "App-navbarHeader" href="#home">ARTEMISIA GENTILESCHI</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/About">ABOUT</Nav.Link>
            <NavDropdown title="PORTFOLIO" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">PENCIL</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">WATERCOLOR</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">OIL</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;