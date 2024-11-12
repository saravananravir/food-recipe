import React from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';

const Contact = () => {
  return (
    <div style={{ padding: '1.25em', color: '#fff' }}>
      <div style={{ maxWidth: '50%', margin: '0 auto' }}>
        <h2>Contact Us</h2>
        <p>Reach out to us for any queries or feedback!</p>
        <p>Thank you for visiting our website. We hope you found a recipe that made you happy!</p>

        <Form>
          <Form.Field inline style={{ marginBottom: '1em', display: 'flex', alignItems: 'center' }}>
            <label style={{ color: '#fff', minWidth: '6em', marginRight: '1em' }}>Name:</label>
            <input style={{ width: '100%' }} placeholder='Your name' />
          </Form.Field>
          <Form.Field inline style={{ marginBottom: '1em', display: 'flex', alignItems: 'center' }}>
            <label style={{ color: '#fff', minWidth: '6em', marginRight: '1em' }}>Email:</label>
            <input style={{ width: '100%' }} type='email' placeholder='Your email address' />
          </Form.Field>
          <Form.Field inline style={{ marginBottom: '1em', display: 'flex', alignItems: 'center' }}>
            <label style={{ color: '#fff', minWidth: '6em', marginRight: '1em' }}>Subject:</label>
            <input style={{ width: '100%' }} placeholder='Subject' />
          </Form.Field>
          <Form.Field inline style={{ marginBottom: '1em', display: 'flex', alignItems: 'center' }}>
            <label style={{ color: '#fff', minWidth: '6em', marginRight: '1em' }}>Message:</label>
            <textarea placeholder='Your message' rows={4} style={{ width: '100%' }} />
          </Form.Field>
          <Form.Field style={{ color: '#fff', textAlign: 'center' }}>
            <Checkbox
              label={<label style={{ color: '#fff' }}>Yes, I'd like to receive newsletters and offers from Food Recipe Sharing !</label>}
              defaultChecked
            />
          </Form.Field>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type='submit'>Submit</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Contact;