import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


  function RenderPics({pics}){
    if (pics != null) {
        return(
          <Card>
          <CardImg width="200%" src={pics.image} alt={pics.name}/>
          <CardBody>
            <CardTitle>{pics.date}</CardTitle>
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
        <div className="container">
          <div className="row">
                     <RenderPics pics={props.pics} />
            </div>
          </div>
        );
      }
      else{
        return ( <div></div>);
      }
    }

export default PicsDetail;
