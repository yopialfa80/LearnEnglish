import React, { Component } from "react";
import "../css/style.css";
import img1 from "../assets/image/image1.jpg";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Button, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

class Login extends Component {

  

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.state = {
      email: '',
      password: ''
    }
    
  }

  
  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  } 

  login() {

    

    axios.defaults.withCredentials = true;

    axios.get('/sanctum/csrf-cookie').then(response => {

      const datas = {
        email: this.state.email,
        password: this.state.password,
      };

      axios({
        method: 'post',
        url: 'api/auth/login',
        data: datas,
        responseType: 'json'
      })
        .then(function (response) {
          console.log(response.data);
      },
      (error) => {
        console.log('error', error.response)
      });

    });

    

  };

  render() {

    return (
      <Container>
        <h1>Learn-TOEFL</h1>

        <Row className="login" style={{marginTop:'20px'}}>
          <Col>
            <h2>
              Get Work Done Faster<br />
              and Better With Us
            </h2>
          </Col>
          <Col>
            <Row>
                
            </Row>
          </Col>
        </Row>
        <Row style={{marginTop:'20px'}}>
        <Col sm={3}></Col>
          <Col sm={6}>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>@</InputGroupText>
                </InputGroupAddon>
                <Input name="email" onChange={e => this.onChange(e)} type="email" placeholder="username" />
              </InputGroup>
          </Col>
          <Col sm={3}></Col>
        </Row>

        <Row style={{marginTop:'20px'}}>
        <Col sm={3}></Col>
          <Col sm={6}>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>@</InputGroupText>
                </InputGroupAddon>
                <Input name="password" placeholder="password" type="password" onChange={e => this.onChange(e)}/>
              </InputGroup>
          </Col>
          <Col sm={3}></Col>
        </Row>

        <Row style={{marginTop:'20px'}}>
          <Col sm={3}></Col>
            <Col sm={6}>
                <Button onClick={this.login} color="primary" size="lg" block>Block level button</Button>
            </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
