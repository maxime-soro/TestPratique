import React from 'react';
import { Card, CardImg, CardTitle, Col, Row, Container } from 'reactstrap';


  function RenderPics({pics}){
    if (pics != null) {
        return(
          <Container>
          <Row>

          <Col md={7} className="my-3">
          <Card >
          <CardImg width="100%" src={pics.image} alt={pics.name}/>
            </Card>
          </Col>
          <Col md={5} className="my-3">
          <CardTitle>
          <div><td>{new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "2-digit",
  hour: "numeric",
  minute: "numeric",
  timeZoneName: "short",
}).format(new Date(Date.parse(pics.date)))}
</td></div>
</CardTitle>
          </Col>


          </Row>
          </Container>


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

                     <RenderPics pics={props.pics} />


          </div>
        );
      }
      else{
        return ( <div></div>);
      }
    }

export default PicsDetail;
