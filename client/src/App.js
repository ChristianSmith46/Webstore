import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <header>
        <Navbar sticky="top" bg="dark" variant="dark" style={{ padding: '10px' }}>
          <Container fluid>
            <Navbar.Brand href="/">
              <img
                alt="keyboard"
                src="/keyboard.png"
                width="32"
                height="32"
                className="d-inline-block align-top"
              />{' '}
              Spookeys
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav.Link href="/cart" id='cart'>
                <img
                  alt="cart"
                  src="/cart.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                Cart
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
