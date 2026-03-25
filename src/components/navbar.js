import React, { Component } from 'react';
import NavMenu from './NavMenu'; // Assuming NavMenu is the correct component name, update accordingly
import '../css/navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: '',
      isSidebarOpen: false,
    };
  }



  // Set state of the toggle button
  toggleSidebar = () => {
    this.setState((prevState) => ({
      isSidebarOpen: !prevState.isSidebarOpen,
    }));
  };

  activeItem = (item) => {
    if (this.state.NavItemActive.length > 0) {
      document.getElementById(this.state.NavItemActive).classList.remove('active');
    }
    // set active item and automatically close sidebar after navigation
    this.setState({ NavItemActive: item, isSidebarOpen: false }, () => {
      document.getElementById(this.state.NavItemActive).classList.add('active');
    })
  }

  render() {
    return (
      <>
        <button className='sidebar-toggle' onClick={() => this.toggleSidebar()}>
          <span className="material-symbols-outlined">{this.state.isSidebarOpen ? "close" : "menu"}</span>
        </button>
        <nav className={this.state.isSidebarOpen ? "nav-active" : "nav-inactive"}>
          <ul>
            <NavMenu item="Home" tolink="/" activec={this.activeItem} />
            <NavMenu item="About" tolink="/about" activec={this.activeItem}/>
            <NavMenu item="Education" tolink="/education" activec={this.activeItem}/>
            <NavMenu item="Skills" tolink="/skills" activec={this.activeItem} />
            <NavMenu item="Certificates" tolink="/certificates" activec={this.activeItem} />
            <NavMenu item="Projects" tolink="/projects" activec={this.activeItem}/>
            <NavMenu item="Contact" tolink="/contact" activec={this.activeItem} />
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
