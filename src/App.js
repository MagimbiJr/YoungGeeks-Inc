import React from 'react';
import Header from './components/Header/Header';
import SideDrawer from '../src/components/Header/SideDrawer/SideDrawer';
import Backdrop from '../src/components/Header/Backdrop/Backdrop';
import Features from '../src/components/Features/Features';
import OurClient from '../src/components/OurClient/OurClient';
import Solution from '../src/components/Solution/Solution';
import Pricing from '../src/components/Pricing/Pricing';
import Form from '../src/components/Form/Form'
import Footer from '../src/components/Footer/Footer'
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
        <Solution />
        <Pricing />
        <OurClient />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
