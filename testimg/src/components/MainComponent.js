import React, { Component } from 'react';
import Header from './HeaderComponent';
import Feed from './FeedComponent';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
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
      <Feed pictures={this.state.pics} />
      <h1> Main quel bail vrai délire</h1>

      </div>
    );
  }
}

export default Main;
