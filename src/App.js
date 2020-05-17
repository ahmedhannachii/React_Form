import React from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <Container className="back">
    <center>CONTACTEZ NOUS</center>
    <Form>
      <FormGroup>
      <label for="exampleInputUsername"></label>
      <input class="form-control" id="name" placeholder="Votre Nom"/>
      </FormGroup>
      <FormGroup>
      <label for="exampleInputEmail"></label>
      <input type="email" class="form-control" id="email" placeholder="Votre Email"/>
      </FormGroup>
      <FormGroup>
      <label for="telephone"></label>
      <input type="number" class="form-control" id="phone" placeholder="Votre Numéro"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText"></Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <Row>
      <Col sm="12" md={{ size: 6, offset: 5 }}>
      <Button color="secondary" >Send Message</Button>
      </Col>
      </Row>
    </Form>
    </Container>
  );
}

export default App;
