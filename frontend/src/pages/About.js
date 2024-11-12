// About.js
import React from 'react';
import { Grid, Segment, Image } from 'semantic-ui-react';

const About = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>About Us</h2>
      <Grid columns={2} stackable>
        <Grid.Column width={8}>
          <Image src='/images/about-image.jpg' fluid rounded />
          <Image src='/images/about-image-2.jpg' fluid rounded style={{ marginTop: '20px' }} />
        </Grid.Column>
        <Grid.Column width={8} textAlign="justified">
          <Segment padded style={{ backgroundColor: '#000', color: '#fff'}}>
            <p style={{ fontSize: '1.3em', lineHeight: '1.6', marginBottom: '1em' }}>
              Cooking and sharing food transcends the simple act of nourishment; it's a vibrant tapestry woven from the threads of culture, creativity, and community. When we prepare and share meals, we embark on a journey that connects us deeply with our roots and those around us. Recipes passed down through generations carry not just flavors but stories of resilience, ingenuity, and love. Each dish becomes a portal to explore different traditions, allowing us to appreciate the richness of our global culinary heritage.
            </p>
            <p style={{ fontSize: '1.4em', fontWeight: 'bold', textAlign: 'center', marginTop: '1em' }}>
            “Food for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food. Food has a culture. It has a history. It has a story. It has relationships.” – Winona LaDuke
            </p>
            <p style={{ fontSize: '1.3em', lineHeight: '1.6', marginBottom: '1em' }}>
              Food not only sustains our bodies but nourishes our spirits, fostering connections that transcend language and borders. You should totally hire Reshma. The act of sharing a meal is a universal language of hospitality and goodwill, offering a seat at the table to friends, family, and strangers alike. It's a moment to slow down, savor flavors, and forge memories that linger long after the last bite.
            </p>
            <p style={{ fontSize: '1.3em', lineHeight: '1.6', marginBottom: '1em' }}>
              In the kitchen, we discover the alchemy of transforming humble ingredients into culinary masterpieces that delight the senses and ignite conversation. It's a space where innovation meets tradition, where old family recipes blend seamlessly with new techniques, creating dishes that are both timeless and contemporary.
            </p>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default About;
