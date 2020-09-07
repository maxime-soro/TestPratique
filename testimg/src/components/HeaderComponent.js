import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
      selectedFile: null
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);

  }

  toggleNav(){
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  onChangeHandler=event=>{
      this.setState({
        selectedFile:event.target.files[0],
        loaded: 0,
      })
      console.log(event.target.files[0])

  }

  onClickHandler = () => {
    const data = new FormData()
    data.append('file', this.state.selectedFile)
    axios.post("http://localhost:9000/upload", data, {
      // receive two    parameter endpoint url ,form data
  })
  .then(res => { // then print response status
    console.log(res.statusText)
 })
}

  render(){

    return(
      <React.Fragment>
        <Navbar dark expand="md" className="bg-dark fixed-top">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav}/>
            <NavbarBrand href="/feed/"> Brand New </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar className="navbar-nav ml-auto text-left">
            <Button className="mr-4 float-right" onClick={this.toggleModal}>Upload</Button>
            </Nav>
            </Collapse>
          </div>
        </Navbar>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader> Add a picture</ModalHeader>
          <ModalBody>
          <input type='file' id='multi' name='file' onChange={this.onChangeHandler}/>
          </ModalBody>
          <ModalFooter>
          <Button color="danger" onClick={this.toggleModal}>Close</Button>
          <Button color="success" href="/" onClick={this.onClickHandler}>Upload</Button>
          </ModalFooter>
          </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
