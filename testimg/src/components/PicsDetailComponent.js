import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


  function RenderPics({pics}){
    if (pics != null) {
        return(
          <Card>
          <CardImg width="100%" src={pics.image} alt={pics.name}/>
          <CardBody>
            <CardTitle>{pics.name}</CardTitle>
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
            <div  className="col-12 col-md-5 m-1">
                     <RenderPics pics={props.pics} />
                     </div>
            </div>
          </div>
        );
      }
      else{
        return ( <div></div>);
      }
    }

export default PicsDetail;
