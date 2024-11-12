
import React from 'react';
import { Segment, Container } from 'semantic-ui-react';

const Footer = () => {
  return (
    <Segment inverted color='#ddd' textAlign='center' style={{ marginTop: '20px' }}>
      <Container>
        &copy; 2024  Food Recipe Sharing . All rights reserved.
      </Container>
    </Segment>
  );
}

export default Footer;