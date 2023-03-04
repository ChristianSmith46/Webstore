import './App.css';
import { Navbar, Nav, Container, NavLink, Row, Stack, Col, Card } from 'react-bootstrap';

function App() {
  return (
    <>
      <header>
        <Navbar fixed="top" bg="dark" variant="dark" style={{ padding: '10px' }}>
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
        <Navbar fixed='top' bg="dark" variant="dark" style={{ marginTop: '66px', padding: '0px 10px 0px', borderTop: '1px solid white', borderBottom: '1px solid white' }}>
          <Container fluid>
            <Nav>
              <Nav.Link className='underline' href="/keyboards">Keyboards</Nav.Link>
              <div className='vr bg-light' />
              <Nav.Link className='underline' href="/mousepads">Mousepads</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main style={{marginTop: '110px'}}>
        {/* <Container fluid> */}
        <Row>
          <Col md={8}>
            <Card className="bg-dark text-white">
              <Card.Img src="/tokyo60.webp" alt="Tokyo60 Keyboard" height='650px' />
              <Card.ImgOverlay>
                <Card.Title>Tokyo60</Card.Title>
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Stack height='706px'>
            <Card className="bg-dark text-white">
              <Card.Img src="/tofu60.webp" alt="Tofu60 Keyboard" height='300px' />
              <Card.ImgOverlay>
                <Card.Title>Tofu60</Card.Title>
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="bg-dark text-white">
              <Card.Img src="/GH60.webp" alt="GH60 Keyboard" height='300px' />
              <Card.ImgOverlay>
                <Card.Title>GH60</Card.Title>
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            </Stack>
          </Col>
        </Row>
        {/* </Container> */}

      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
