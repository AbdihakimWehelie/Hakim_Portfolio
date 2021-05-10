import React, {Component} from "react"
import {NavLink} from 'react-router-dom'
import { Input, Menu } from 'semantic-ui-react'
import { SocialIcon } from 'react-social-icons';
import '../App.css';

 export default class NavBar extends Component{

    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })



    render(){

        const { activeItem } = this.state;

      return(
        <header className="bg-blue-600 grid-flow-row">

        </header>
      )


    }
}



/*
<nav className="container mx-auto flex justify-between bg-blue-600" style={{fontSize:"20px", fontFamily:"Paprika", borderRadius:"20px"}}>
  <NavLink to="/" exact className="inflex-flex items-center px-6 px-3 mr-4 text-yellow-400">
        <li>Home</li>
    </NavLink>
  <NavLink to="/About" className="inflex-flex items-center px-6 px-3 mr-4 text-yellow-400">
      <li>About</li>
  </NavLink>

  <NavLink to="/Post" className="inflex-flex items-center px-6 px-3 mr-4 text-yellow-400">
      <li>Contact</li>
  </NavLink>

  <NavLink to="/Projects" className="inflex-flex items-center px-6 px-3 mr-4 text-yellow-400">
      <li>Projects</li>
    </NavLink>
</nav>
*/

/*
  <NavLink to="/" exact className="inflex-flex items-center px-6 px-3 mr-4 text-yellow-400">
        Home
    </NavLink>

    <NavLink to="/About" className="inflex-flex items-center px-6 px-3 mr-4 text-yellow-400">
        About
    </NavLink>

    <NavLink to="/Post" className="inflex-flex items-center px-6 px-3 mr-4 text-yellow-400">
        Contact
    </NavLink>

    <NavLink to="/Projects" className="inflex-flex items-center px-6 px-3 mr-4 text-yellow-400">
        Projects
      </NavLink>
*/



/*
<Menu Stackable>
<Menu.Item
name='Home'
active={activeItem === 'Home'}
onClick={this.handleItemClick}
>
    <NavLink to="/" exact className="inflex-flex items-center px-6 px-3 mr-4 text-yellow-400">
        Home
    </NavLink>
</Menu.Item>
<Menu.Item
name='About'
active={activeItem === 'About'}
onClick={this.handleItemClick}
>
    <NavLink to="/About" className="inflex-flex items-center px-6 px-3 mr-4 text-yellow-400">
        About
    </NavLink>
</Menu.Item>
<Menu.Item
name='Contact'
active={activeItem === 'Contact'}
onClick={this.handleItemClick}
>
    <NavLink to="/Post" className="inflex-flex items-center px-6 px-3 mr-4 text-yellow-400">
        Contact
    </NavLink>
</Menu.Item>
<Menu.Item
name='Project'
active={activeItem === 'Project'}
onClick={this.handleItemClick}
>
    <NavLink to="/Projects" className="inflex-flex items-center px-6 px-3 mr-4 text-yellow-400">
        Projects
      </NavLink>
</Menu.Item>
</Menu>
*/
