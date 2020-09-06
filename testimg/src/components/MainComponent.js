import React, { Component } from 'react';
import Header from './HeaderComponent';
import Feed from './FeedComponent';
import ImageContainer from './ImageContainerComponent';

import PicsDetail from './PicsDetailComponent';

import { Container, Row, Col, Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link, Route, Switch } from 'react-router-dom';
import { PICTURES } from '../shared/pictures';
const BASE_URL = "http://localhost:9000/images/"

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pics : PICTURES,
      selectedPics : null,
      images: [],
      imageUrls:[],
    };
  }

  onPicsSelect(picsId) {
  this.setState({ selectedPics: picsId});
}


  render() {
    const PicsDetailId = ({match}) =>{
      return(
        <PicsDetail pics={this.state.pics.filter((pics) => pics.id === parseInt(match.params.picsId, 10))[0]} />

      )
    }

    return (
      <div>
      <Header />
      <Container>
      <Row>
      <Col>
      <Switch>
      <Route path="/feed/:picsId" component={PicsDetailId} />
      <Route exact path="/feed" component={() => <Feed pictures={this.state.pics}/>} />

      </Switch>
      </Col>
      </Row>
      <h1> Main vrai délire</h1>
      </Container>


      </div>
    );
  }
}

export default Main;
