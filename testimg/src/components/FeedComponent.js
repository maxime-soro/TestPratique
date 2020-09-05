import React, { Component, useState, useEffect } from 'react';
import Header from './HeaderComponent';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
export const baseUrl = "http://localhost:9000/images";



function RenderFeedItem({pics, onClick}) {

  return(

    <Card onClick={() => onClick(pics.id)}>
      <CardImg width="100%" src={pics.image} alt={pics.name}/>
      <CardImgOverlay>
      <CardTitle>{pics.filename}</CardTitle>
  </ CardImgOverlay>
    </Card>
  );
}

const Feed = (props) =>{
  const feed = props.pictures.map((pics) =>{
    return (
      <div key={pics.id} className="col-12 col-md-5 m-1">
        <RenderFeedItem pics={pics} onClick={props.onClick} />
      </div>


    )
  });


  return (
      <div className="container">
          <div className="row">
              {feed}
          </div>
      </div>
  );
}


export default Feed;
