import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Col, Row, Container } from 'reactstrap';


  function RenderPics({pics}){
    if (pics != null) {
        return(
          <Card>
          <CardImg width="200%" src={pics.image} alt={pics.name}/>
          <CardBody>
            <CardTitle>
            <div><td>{new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  }).format(new Date(Date.parse(pics.date)))}
</td></div>
            </CardTitle>
          </CardBody>
          </Card>
        );
    }
    else {
      return(
        <div></div>
      );
    }
  }

    const PicsDetail = (props) => {
if (props.pics != null){
      return (
        <div>
        <Container>
        <Row>
            <Col xs={8}>
                     <RenderPics pics={props.pics} />
                     </Col>
                     <Col>
                     </Col>
                     </Row>
                     </Container>

          </div>
        );
      }
      else{
        return ( <div></div>);
      }
    }

export default PicsDetail;
