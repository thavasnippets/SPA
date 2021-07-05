import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <strong>Filters</strong>
        </CardHeader>
        <CardBody>
          <Row>
            <Col>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>From</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="" />
              </InputGroup>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              {" "}
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>To</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="" />
              </InputGroup>
            </Col>
          </Row>
          <br />
          <Button color="primary">Search</Button>{" "}
        </CardBody>
      </Card>
    );
  }
}

export default Filters;
