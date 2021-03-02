import React, { Component } from 'react';
import { Progress, Row, Col, Card, CardBody } from 'reactstrap';

class ScaleRate extends Component {

  render() {
    const { confidence } = this.props;

    let width = confidence*100+1.5
    return (
      <div>
        <Card>
          <CardBody>
            <b>Machine thinks this document is having a...</b>
            <div className="text-right" style={{width: width+"%", transitionDuration: "0.6s"}}>
            ▼
            </div>
            <Progress multi className="justify-content-end">
              <Progress bar color="light" value={1-confidence} max={1}></Progress>
            </Progress>
            <Row>
              <Col className="text-left">
                Low relevance
              </Col>
              <Col className="text-right">
                High relevance
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ScaleRate;
