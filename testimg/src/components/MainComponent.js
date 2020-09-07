import React, { Component } from 'react';
import Header from './HeaderComponent';
import Feed from './FeedComponent';

import PicsDetail from './PicsDetailComponent';

import { Container, Row, Col } from 'reactstrap';
import { Route, Switch, Redirect } from 'react-router-dom';
import { PICTURES } from '../shared/pictures';

class Main extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();  // Create a ref object

    this.state = {
      pics : PICTURES,
      selectedPics : null,

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
      <div >
      <Header/>
      <Container>
      <Row>
      <Col>
      <Switch>
      <Route path="/feed/:picsId" component={PicsDetailId} />
      <Route exact path="/feed" component={() => <Feed pictures={this.state.pics}/>} />
      <Redirect to="/feed/"/>
      </Switch>
      </Col>
      </Row>
      </Container>


      </div>
    );
  }
}

export default Main;
