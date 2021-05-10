import React, {useState} from "react"
import styled from "styled-components"
import Menu from "./menuToggle"
import {NavLink} from 'react-router-dom'
import '../../App.css';


const NavLinkContainer= styled.div
`
    height: 100%;
    display:flex;
    align-items: center;
    border: 2px soild #FBBF24;
`


const LinkWrapper= styled.ul
`
  margin:0;
  padding:0;
  display:flex;
  height:70%;
  width:100%
  list-style: none;
  background-color: #3b82f6;
  flex-direction: column;
  position: absolute;
  top:22.5px;
  left:0;
  border: 5px soild yellow;
  z-index:100;



`

const LinkItem= styled.li
`
    width:100%;
    padding: 0 1.1em;
    color: #222;
    font-weight:16px;
    display: flex;
    margin-bottom:10px;
    font-size: 14px;
    font-family:Paprika;
    border-bottom: 2px solid transparent;


    &:hover {
   border-bottom: 2px solid red;
 }

`


const Link= styled.a
`
  color:inherit;
  font-size: inherit;

`




export default function Mobile(props){

  const [isOpen, setOpen] = useState(false);

  return(

    <NavLinkContainer>
        <Menu isOpen= {isOpen} toggle={() => setOpen(!isOpen)}/>
        {isOpen &&(
              <LinkWrapper>
                  <LinkItem toggle={() => setOpen(false)}>
                        <NavLink to="/" exact className=" text-yellow-400">
                            Home
                        </NavLink>
                  </LinkItem>
                  <LinkItem>
                        <NavLink to="/About" className="text-yellow-400">
                            About
                        </NavLink>
                  </LinkItem>
                  <LinkItem>
                        <NavLink to="/Post" className=" text-yellow-400">
                            Contact
                        </NavLink>
                  </LinkItem>
                  <LinkItem>
                        <NavLink to="/Projects" className=" text-yellow-400">
                            Projects
                        </NavLink>
                  </LinkItem>
              </LinkWrapper>
        )}
    </NavLinkContainer>

  )

}
