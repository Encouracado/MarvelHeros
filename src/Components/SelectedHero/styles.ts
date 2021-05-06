import styled, {css} from 'styled-components';
import { GiBatMask} from "react-icons/gi";
export const Container = styled.div`
  display: flex;
  overflow-x: hidden;
`;

export const ImageHero = styled.img`

width: 25rem;
height:30rem;
margin-top: 2rem;
margin-left: 3rem;
margin-right: 2rem;

border-radius:10%;
border: 2px solid #3efa57;

`;

export const DescriptionHero = styled.div`

display:flex;
flex-direction:column;

width: 30rem;
margin-top: 7rem;
font-weight:bold;

>strong{
    margin-bottom: 2rem;
    font-size:1.5rem;
}

>span{
    text-align:justify;
    margin-bottom: 2rem;
}

`;

const IconCss = css`
  
  color: blue;
  width: 59px;
  height: 59px;

  
  @media(max-width: 500px){
    width:100px;
    height:100px;
  }
`;

export const Icon = styled(GiBatMask)`${IconCss}`;

export const DisplayIcon = styled.div`

display: flex;
align-items: center;
justify-content: center;

margin-top: 2rem;
margin-bottom:2rem;

width:100vw;
`;