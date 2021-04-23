import styled, {css} from 'styled-components';
import {AiOutlineHome} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineNotification} from 'react-icons/ai'
import {BiSearchAlt} from 'react-icons/bi'
import {GoOctoface} from 'react-icons/go'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-basis: calc(33.333% - 20px);
`;

export const HeroCard = styled.div`
display: flex;
width: 20rem;
height: 20rem;
max-width: 20rem;
max-height: 20rem;
position:relative;
display: inline-block;
cursor: pointer;

margin-top: 10rem;
margin-left: 7.5rem;
margin-right: 7.5rem;
margin-bottom: 5rem; 

>strong{
    display: none;
}

&:hover{
    >strong{
        display:inline;
        position:absolute;
        right: 1.5rem;
        bottom: 1.5rem;

        font-weight: bold;
    }
}

`;

export const ImageHero = styled.img`
   width: 20rem;
   height: 20rem;
   border: 2px solid var(--green);
   border-radius: 10%;

   &:hover{
    border: 2px solid var(--light-hover);
    opacity:0.5;
   }
`;


export const BottonMenu = styled.div`
   position: fixed;
   bottom: 0;
   left: 0;
   z-index: 2;
   background: var(--primary);
   width: 100%;
   border-top: 1px solid var(--outline);
   display: flex;
   justify-content: space-between;
   padding: 8px min(46px, max(10vw, 10px));
   @media( min-width: 500px){
     display: none;
   }
`;

const IconCss = css`
width: 31px;
height: 31px;
cursor: pointer;
color: var(--gray);
& :hover,
  .active{
   fill: var(--light-hover);
}
`;

export const HomeIcon = styled(AiOutlineHome)`${IconCss}`;
export const EmailIcon = styled(HiOutlineMail)`${IconCss}`;
export const NotificationIcon = styled(AiOutlineNotification)`${IconCss}`;
export const SearchIcon = styled(BiSearchAlt)`${IconCss}`;
export const FunnyFace = styled(GoOctoface)`${IconCss}`;