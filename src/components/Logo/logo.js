import React from 'react'
import styled from 'styled-components';
import Glasses from './glasses.png'


//a styled component that wraps around the input box.
const LogoWrapper = styled.div
`
  display: flex;
  align-items:center;

`

const LogoImg=styled.div
`
  width: 29px;
  height: 29px;

  img{
    width: 100%;
    height:100%;
  }

`

const LogoText= styled.div
`
  font-size= 16px;
  margin=0;
  margin-left=4px;
  font-weight:500;
  color:#FBBF24;

`

function Logo(){

    return(
          <LogoWrapper>
              <LogoImg><img src={Glasses} alt="glasses"><?LogoImg>
              <LogoText>Abdihakim Wehelie<LogoText>
          </LogoWrapper>
    )

}

export default Logo;
