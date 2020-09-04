import React, { Component } from 'react';
import Header from './HeaderComponent';
import Feed from './FeedComponent';
import PicsDetail from './PicsDetailComponent';

import { Container, Row, Col, Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { PICTURES } from '../shared/pictures';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pics : PICTURES,
      selectedPics : null
    };
  }

  onPicsSelect(picsId) {
  this.setState({ selectedPics: picsId});
}


  render() {
    return (
      <div>
      <Header />
      <Container>
      <Row>
      <Col>
      <Feed pictures={this.state.pics} onClick={(picsId) => this.onPicsSelect(picsId)}/>
      </Col>
      <Col>
      <PicsDetail pics={this.state.pics.filter((pics) => pics.id === this.state.selectedPics)[0]} />
      </Col>
      </Row>
      <h1> Main vrai délire</h1>
      </Container>


      </div>
    );
  }
}

export default Main;
