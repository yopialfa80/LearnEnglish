import React from "react";
import {
    Card,
    Button
} from "react-bootstrap";
import img1 from '../assets/image/image1.jpg';

class CardClass extends React.Component {
  render() {
    return (
      <div>
        <Card style={{ width: "100%" }} style={{backgroundColor:'#f5f5f5'}}>
          <Card.Img variant="top" src={img1} alt="image"/>
          <Card.Body style={{textAlign:'center'}}>
            <Card.Title>Class 1</Card.Title>
            <Card.Text>
              Description
            </Card.Text>
            <Button variant="primary">Go to Class</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CardClass;
