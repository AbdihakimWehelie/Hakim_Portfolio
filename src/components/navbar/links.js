import styled from 'styled-components'
import React, {Component} from "react"
import {NavLink} from 'react-router-dom'
import '../../App.css';


const NavLinkContainer= styled.div
`
  height:100%;
  display:flex;
  align-center:center;
`

const LinkWrapper = styled.ul
`
    marin: 0;
    padding: 0;
    display: flex;
    height: 100%;

`
const LinkItem= styled.li
`
    display:flex;
    height:100%;
    padding: 0 1.1em;
    font-weight: 500;
    font-size: 24px;
    font-family:Paprika;
    align-items:center;
    justify-content: center;
    border-bottom: 5px solid transparent;


    &:hover {
   border-bottom: 5px solid red;
 }

`

export default function Links(){

      return(
        <NavLinkContainer>
            <LinkWrapper>
                <LinkItem>
                      <NavLink to="/" exact className="inflex-flex items-center px-6 px-3 mr-4 text-yellow-400">
                          Home
                      </NavLink>
                </LinkItem>
                <LinkItem>
                      <NavLink to="/About" className="inflex-flex items-center px-6 px-3 mr-4 text-yellow-400">
                          About
                      </NavLink>
                </LinkItem>
                <LinkItem>
                      <NavLink to="/Post" className="inflex-flex items-center px-6 px-3 mr-4 text-yellow-400">
                          Contact
                      </NavLink>
                </LinkItem>
                <LinkItem>
                      <NavLink to="/Projects" className="inflex-flex items-center px-6 px-3 mr-4 text-yellow-400">
                          Projects
                      </NavLink>
                </LinkItem>
            </LinkWrapper>
        </NavLinkContainer>
      )


}


/*
return(
  <NavLink to="/" exact className="inflex-flex items-center px-6 px-3 mr-4 text-yellow-400">
<li>Home</li>
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
)
*/
