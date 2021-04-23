import styled, {css} from 'styled-components';
import {AiOutlineHome} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineNotification} from 'react-icons/ai'
import {BiSearchAlt} from 'react-icons/bi'
import {GoOctoface} from 'react-icons/go'
export const Container = styled.div`
  background: var(--primary);
  
`;

export const Wrapper = styled.div`
  height:100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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