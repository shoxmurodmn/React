import styled from "styled-components";
import Rasm from "./Vermont.png"
const Vermon = styled.section`
background:url(${Rasm}) ;
/* background-repeat: no-repeat; */
background-position: center;
/* background-size: cover; */
height: 571px;
margin-top:92px;
position:relative;


`
const BgBlack= styled.div`
   background: rgba(0, 0, 0,0.65);
   width: 100%;
   height:100%;
`
const VermontTitle = styled.h3`
   position:absolute;
   top:204px;
   left :50%;
   transform: translateX(-50%);
   display:flex;
   flex-direction: column;
   gap:48px;
   justify-content: center;
   align-items: center;
`
const VermontTitl =styled.div`
    max-width:567px;
   color: #FFF;
   text-align: center;
   font-size: 28px;
   font-style: normal;
   font-weight: 600;
   line-height: 36px;
   letter-spacing: -0.56px;
  
   z-index: 15;
`
export { Vermon, BgBlack, VermontTitle, VermontTitl }