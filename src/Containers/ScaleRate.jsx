import React, { Component } from 'react';
import { Progress, Row, Col, Badge } from 'reactstrap';

class ScaleRate extends Component {

  render() {
    const { confidence } = this.props;
    
    return (
      <div>
        <Row>
          <Col>
            <div className="text-left">
              { confidence > 0.5 ? 
                <Badge color="primary">Relevant</Badge>
                : <Badge color="light" style={{"backgroundColor": "white"}}>Relevant</Badge>}
            </div>
          </Col>
          <Col>
            <div className="text-right">
            { confidence < 0.5 ? 
                <Badge color="warning">Irrelevant</Badge>
                : <Badge color="light" style={{"backgroundColor": "white"}}>Irrelevant</Badge>}
            </div>
          </Col>
        </Row>
        <Progress multi>
          <Progress bar color="primary" value={confidence} max={0.5}></Progress>
          <Progress bar color="warning" value={1-confidence} max={0.5}></Progress>
        </Progress>

      </div>
    );
  }
}

export default ScaleRate;
