import styled, {css} from 'styled-components';
import { GiBatMask} from "react-icons/gi";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height:100px;
  width: 100vw;
  margin-top:100px;

  >span{
      font-size: 33px;
      font-weight: bold;
  }
  @media(max-width: 500px){
    >span{
      display:none
    }
  }
  
`;

const IconCss = css`
  width: 59px;
  height: 59px;
  @media(max-width: 500px){
    width:100px;
    height:100px;
  }
`;

export const Icon = styled(GiBatMask)`${IconCss}`;
