import React from "react";
import { Card } from "react-bootstrap";

const ShapeTwo = ({ item }) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>userName: {item.userName}</Card.Title>
          <Card.Text>Email: {item.email}</Card.Text>
          <Card.Text>Age: {item.age}</Card.Text>
          <Card.Text style={{color: "blue"}}>gender: {item.gender}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShapeTwo;
