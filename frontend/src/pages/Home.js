import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  return (
    <Container textAlign='center'>
      <Header as='h1' style={{ color: 'white' }}>Welcome to Food Recipe Sharing </Header>
      <Segment>
        <Carousel autoPlay={true} interval={1500} stopOnHover={true} dynamicHeight={true}>
          <div>
            <img src='/images/image-1.jpg' alt='Good cooking' />
            <p className="legend">Good cooking</p>
          </div>
          <div>
            <img src='/images/image-2.jpg' alt='Good food' />
            <p className="legend">Good food</p>
          </div>
          <div>
            <img src='/images/image-3.jpg' alt='Good fun' />
            <p className="legend">Good fun</p>
          </div>
          <div>
            <img src='/images/image-4.jpg' alt='Share with friends' />
            <p className="legend">Share with friends</p>
          </div>
          <div>
            <img src='/images/image-5.jpg' alt='Spread the joy' />
            <p className="legend">Spread the joy</p>
          </div>
          <div>
            <img src='/images/image-6.jpg' alt='Mouth-watering recipes' />
            <p className="legend">Mouth-watering recipes</p>
          </div>
          <div>
            <img src='/images/image-7.jpg' alt='Find new favorites' />
            <p className="legend">Find new favorites</p>
          </div>
          <div>
            <img src='/images/image-8.jpg' alt='All right here' />
            <p className="legend">All right here</p>
          </div>
        </Carousel>
      </Segment>
    </Container>
  );
}

export default Home;