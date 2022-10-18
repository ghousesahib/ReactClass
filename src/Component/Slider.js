import Carousel from 'react-bootstrap/Carousel';
import img1 from '../image/a.jpg';
import img2 from '../image/b.jpg';
import img3 from '../image/c.jpg';

function Slider() {
  return (
<>
<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 slider"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Saudi</h3>
          <p>Shop Now</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Dubai</h3>
          <p>Shop Now</p>
            </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider"
          src={img3}     
               alt="Third slide" />
        <Carousel.Caption>
        <h4>WELCOME TO</h4>
          <h1>MOGBIL WALEED AIED AL HUSSAYEN<br></br>
TRADING COMPANY</h1>
<button className='btn-color'>ABOUT</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

</>
);
}



export default Slider;