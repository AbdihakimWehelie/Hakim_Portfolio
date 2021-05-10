import styled from 'styled-components'
import {useMediaQuery} from 'react-responsive'
import Links from './links'
//import Logo from './Logo/logo.js'
import {DeviceSize} from "./responsive"
import Moblie from './mobileLinks'
import Menu from './menuToggle'


const NavContainer =styled.div
`
  width: 100%;
  height:100%;
  display:flex;
  align-items:center;
  padding: 0 1.5em;
  background-color: #3B82F6;
`


const LeftSection= styled.div
`
    display:flex;

`;


const MidSection= styled.div
`
    display:flex;
    flex:2;
    justify-content:center;
`;

const RightSection= styled.div
`
    display:flex;

`;



export default function NavBar(props){

    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

    return(
          <NavContainer>
                <LeftSection>
                </LeftSection>
                <MidSection>
                {!isMobile && <Links/>}
                </MidSection>
                <RightSection>{isMobile && <Moblie/>}</RightSection>
          </NavContainer>
    )

}
