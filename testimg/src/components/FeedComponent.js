import React, { Component, useState, useEffect } from 'react';
import Header from './HeaderComponent';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, CardBody, CardText, Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
export const baseUrl = "http://localhost:9000/images";



function RenderFeedItem({pics, onClick}) {

  return(
    <Card className="m-3">
    <Link to={`/feed/${pics.id}`} >
      <CardImg width="100%" src={pics.image} alt={pics.name}/>
      <CardImgOverlay>
      <CardTitle>{pics.filename}</CardTitle>
  </ CardImgOverlay>
  </Link>
    </Card>
  );
}

const Feed = (props) =>{

  const feed = props.pictures.map((pics) =>{
    return (

      <div key={pics.id} className="col-12 col-md-4 offset-md-4">
        <RenderFeedItem pics={pics} />
      </div>



    )
  });


  return (
      <div className="container">
      <div className="">
          <div className="row flex-column-reverse">
                        {feed}
          </div>
          </div>
      </div>
  );
}


export default Feed;
