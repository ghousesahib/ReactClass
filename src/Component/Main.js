import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../image/a.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Main() {
  const sty={
    fontSize:'20px',
    textAlign:'left'
  }
  const sty2={
    fontSize:'50px',
    textAlign:'left'
  }
  const sty3={
    width:'100%',
  paddingTop:'50px'}
  const styTop={
    paddingTop:'30px',
    textAlign:'left'
  }
    const userNamechange = () =>{
        const names = [ "Website","Us", "Me"];
        const int= Math.floor(Math.random()*3);
        return names[int]
    }
    const raga= ()=>{
      console.log('hi')
    }
    
    const raga1= ()=>{
      console.log('hi hello')
    }
    const harshan= (name)=>{
      alert ('Hello {$name}')
    }
  return (
    <>
    <Container>
    <Row>
      <Col>
        <p style={styTop}><span style={sty2}>About {userNamechange()}</span><br /></p>
        <p style={sty}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
        <p style={sty}><Button href="#">Read More</Button> </p><br></br><br></br><br></br>
        <button onClick={raga}>Click</button>
        <button onDoubleClick={raga1}>Click</button>
        <button onClick={() => harshan ('harshan')}>Click</button>
    
    </Col>
      <Col><img  style={ sty3} src={img1} alt="First slide" /></Col>
    </Row>
    <h1 style={{paddingTop:'50px' }}>Our Services</h1>
    <Row>
      <Col style={styTop}> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
      <Col style={styTop}> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title 2</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
      <Col style={styTop}> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
    </Row>
  </Container>
    
    
    </>
  )
}

export default Main
