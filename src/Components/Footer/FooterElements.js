import styled from 'styled-components';

export const Box = styled.div`
  position: absolute; /*Fixes footer to bottom of window */
  bottom: 0;
  width: 100%;
  text-align: center;
  
`;
   
export const Container = styled.div`
    display: flex;
    justify-content: center;
    /*max-width: 1000px;*/
    margin: 0 auto;
    width: fit-content;
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 10px;
`
   
export const Column = styled.div`
  display: flex;
  text-align: left;
  margin-left: 60px;
`;

export const IconLink = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  margint-right: 10px;

  &:hover {
    /*background: white;*/
    width: 60px;
    height: 60px;
    transition: 200ms ease-in;
  }
`;