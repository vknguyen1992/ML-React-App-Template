import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <Container>
        <div>
          <h1 className="title">ML React App 1</h1>
        </div>
        <Main />
      </Container>
    );
  }
}

export default App;