import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70vw;
  height: 20rem;
  
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  //background:blue;


  
`;

export const FormStyle = styled.form`

    display: flex;
    flex-direction: column;
    width: 20rem;
    height: 20rem;
    justify-content: center;
    align-items: center;
  
  
`;



export const InputStyle = styled.input`


    margin-top: 10px;
    margin-bottom:18px;
    border: 1px solid var(--gray);
    
    //background: green;
    padding: 12px;
    width: 25rem;
&::placeholder{
      color: var(--gray);
};

&:hover{
  
  border: 1px solid var(--light-hover);
  
  cursor:pointer;
  &::placeholder{
      color: var(--light-hover);
  }
};

&:focus{
  border: 1px solid var(--light-hover);
  &::placeholder{
      color: var(--light-hover);
  };
};

`;
