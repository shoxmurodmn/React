import styled from "styled-components";

const Container = styled.div`
   width: 1000px;
   margin: 0 auto;
   padding:20px;
   /* background-color: #cccccc; */
   /* background-color: red; */
`

const Form = styled.form`
   margin:25px auto;
   width: 300px; 
   /* border-top-right-radius: 10%; */
   border-radius: 10px;
   padding: 20px ;
   border: 1px solid #cccccc;
   background: #00eaff;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 10px;
   
`
const Inp = styled.input`
   border: none;
   outline: thick;
   border-radius: 5px;
   height:20px ;
   padding: 10px;
`
const Sum = styled.input`
   border: none;
   border-radius: 5px;
   padding: 8px 15px;
   background-color:#318CE7;
   box-shadow: 5px 5px 2px #318ce7ae;
   &:active{
      transform: translate(5px ,5px);
      transition:all 0.2s ease-in-out;
      box-shadow: 1px 1px  #318ce7ae;
   }
`
const Tr = styled.div`
   width: 450px;
   border-collapse: 10px;
   /* background-color: blue; */
   border-radius: 10px;
   display:flex;
   /* flex-direction: f; */
   justify-content: space-between;
   align-items: center;
   gap: 10px;

` 
const Ishnomi = styled.div`
   width: 300px;
   text-align: center;
   /* background-color: #00fcf4; */
   

`
const Btn = styled.button`
   border: 2px solid ${(p) => (p.red ? "#EB4C42" : "#00ff84")};
   border-radius: 6px ;
   padding: 5px 12px;
   background-color: ${(p) => (p.red ? "#FF7FCA" : "#78f8ba")};

`
const List = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap:20px;   
`


export { Container, Form, Inp, Sum, Tr, Ishnomi, Btn, List }