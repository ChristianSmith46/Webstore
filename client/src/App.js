import './App.css';
import { Navbar, Nav, Container, NavLink } from 'react-bootstrap';

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
              <NavLink href='/account' className='scaleup'>
                <img
                  alt="account"
                  src="/account.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                Account
              </NavLink>
              <Nav.Link href="/cart" className='scaleup'>
                <img
                  alt="cart"
                  src="/cart.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                Checkout
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Navbar sticky="top" bg="dark" variant="dark" style={{ padding: '0px 10px 0px', borderTop: '1px solid white', borderBottom: '1px solid white' }}>
          <Container fluid>
            <Nav>
              <Nav.Link className='underline' href="/keyboards">Keyboards</Nav.Link>
              <Nav.Link className='underline' href="/mousepads">Mousepads</Nav.Link>
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
