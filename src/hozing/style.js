import styled, {css} from "styled-components";

const DFJSB = css`
   display: flex;
   justify-content: space-between;
   align-items: center;
`

const Wraper = styled.header`
  width: 100%;
  height: 64px;
  background:#0D263B;
   font-family: 'Montserrat';
`
const WraperHeader = styled.header`
   max-width: 1180px;
   height: 100%;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items:center;

`

const ListUl = styled.ul`
   margin: 0;
   padding: 0;
   list-style-type: none;
   color: #fff;
   font-size: 16px;
   gap : 64px;
   font-weight: 400;

   ${DFJSB}
`

const Contaener = styled.div`
   max-width: 1180px;
   font-family: 'Montserrat';
   margin: 0 auto;
   position:relative;
`
const Nav = styled.div`
  padding: 10px 0;
  ${DFJSB}
`
const Nav_child = styled.div`
   width: 829px;
   display: flex;
   align-items: center;
   padding-left: 16px;
   gap:8px;
   height: 44px;
   border-radius: 2px;
   border: 1px solid var(--border, #E6E9EC);
`
const Nav_child_inp = styled.input`
   width: 100%;
   border:none;
   outline: none;
   height: 90%;
   
`

const btnWidth = (type) => {
   
   switch (type) {
      case 'big': return "180px"
      case 'normal': return '131px'
      case "smal": return "120px"
      default: return "128px"
   }
}


const bgcolor = (type) => {
   switch (type) {
      case 'big': return "#0061DF";
      case 'normal': return 'transparent';
      case "smal": return "transparent";
   }
}

const btnBoreder = (type) => {
   switch (type) {
      case 'big': return "#0061DF";
      case 'normal': return '#E6E9EC';
      case "smal": return "#FFFFFF";
   }
}

const btnColor = (type) => {
   switch (type) {
      case 'big': return "#FFF";
      case 'normal': return 'black';
      case "smal": return "#fff";
   }
}

const Btn = styled.button`
  width:${({type})=>btnWidth(type)}; 
  background:  ${({ type }) => bgcolor(type)};
 
  height:44px;
  color:  ${({ type }) => btnColor(type)};
  font-size: 14px;
  font-weight:300;
  border: 2px solid  ${({ type }) => btnBoreder(type)};
  display: flex;
  align-items: center;
  justify-content: center;
  gap : 8px;
`
export { Wraper, WraperHeader, Contaener, Btn, ListUl, Nav, Nav_child, Nav_child_inp }