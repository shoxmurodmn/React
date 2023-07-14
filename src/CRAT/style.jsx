import Styled, { styled } from "styled-components";

export const Del = styled.button`
  padding: 8px 14px; /*f2000084 */
  background-color: ${(props) => (props.color ? "#58ecd4" :"#f2000084") };
  color: #fff;
  font-weight: 700;
  border: 2px solid ${(props) => (props.color ? "#fff" : "#ff0606") };
  border-radius: 10px;

`
export const Search = styled.input`
   padding:8px 15px ;
   outline: none;
   border-radius: 15px;
   background-color:#eefc74;
   border: 1px solid wheat;


`
