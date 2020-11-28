import React from "react";
import HeaderApp from "../component/HeaderApp";
import CardClass from "../component/CardClass";
import about from '../assets/image/about.png';
import { 
    Container, 
    Jumbotron,
    Row,
    Col
 } from "react-bootstrap";


class HomeApp extends React.Component {
  render() {
    
    // var ServeUrl = env('SERVICES_URL', 'default_value');
    axios({
      method: 'get',
      url: 'http://localhost/PPL/LearnEnglish/public/api/test',
      responseType: 'json'
    })
      .then(function (response) {
        console.log(response.data);
      });

    return (
      <Container fluid="md">
        <HeaderApp />

        

        <Jumbotron className="homeJt">
          <Container>
            <h1>
                Get Work Done Faster<br/>
                and Better With Us
            </h1>
          </Container>
        </Jumbotron>

        <Row style={{alignItems:'center'}}>
            <Col md="4"><CardClass /></Col>
            <Col md="4"><CardClass /></Col>
            <Col md="4"><CardClass /></Col>
            <Col md="4"><CardClass /></Col>
        </Row>

        <img src={about} alt='image' style={{marginTop:'20px', width:'100%', height:'75%'}} />
        
      </Container>
    );
  }
}
export default HomeApp;
