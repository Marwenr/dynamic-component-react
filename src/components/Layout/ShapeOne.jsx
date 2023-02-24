import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const ShapeOne = ({ item }) => {
  return (
    <div>
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item>userName: {item.userName}</ListGroup.Item>
          <ListGroup.Item>Email: {item.email}</ListGroup.Item>
          <ListGroup.Item>Age: {item.age}</ListGroup.Item>
          <ListGroup.Item style={{color: "pink"}}>Gender: {item.gender}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default ShapeOne;
