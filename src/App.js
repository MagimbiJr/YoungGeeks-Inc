import React from 'react';
import Header from './components/Header/Header';
import SideDrawer from '../src/components/Header/SideDrawer/SideDrawer';
import Backdrop from '../src/components/Header/Backdrop/Backdrop';
import Features from '../src/components/Features/Features';
import OurClient from '../src/components/OurClient/OurClient';
import Solution from '../src/components/Solution/Solution'
import '../src/Assets/fontawesome/css/all.min.css'
import './App.css';

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  }

  sideDrawerToggler = () => {
    this.setState((prevState) => {
      return{sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  handleBackdropClick = () => {
    this.setState({sideDrawerOpen: false})
  }
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop backdropClick={this.handleBackdropClick} />
    }
    return (
      <div >
        <Header onDrawerClick={this.sideDrawerToggler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Features />
        <OurClient />
        <Solution />
      </div>
    );
  }
}

export default App;
