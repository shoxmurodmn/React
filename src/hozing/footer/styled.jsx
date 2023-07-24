import styled from "styled-components";

const Foot = styled.footer`
   background-color: #0D263B;
   margin-top:48px;
   padding: 48px 0 24px 0;
   color: #fff;
`
const FootLlist = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;

`
const FootWraper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
`

const FootLlist_heat = styled.div`
   color: var(--color-5, #FFF);
   font-size: 16px;
   font-weight: 600;
   line-height: 24px; /* 150% */
   margin-bottom: 32px;
`

const FootLlist_item = styled.div`
   display: flex;
   justify-content: start;
   align-items: center;
   gap: 32px;
   margin-bottom:20px;
`
   
const FootLlist_item_link = styled.a`
   cursor: pointer;
   max-width:256px;
   text-decoration: none;
   color: #fff;
   color: var(--color-5, #FFF);
   font-size: 14px;
   font-style: normal;
   font-weight: 400;
   /* line-height: 20px; 142.857% */
`

const FootLlist_item_icon = styled.div`
   
`

const FootIcon = styled.div`
   position: relative;
   left: -12px;
   padding-top: 12px;
   display: flex;
   gap:13px;
   justify-content: start;
   align-items: center;
`
const FootIconChi = styled.div`
   width:36px;
   height:36px;
   border-radius: 3px;
   display: flex;
   justify-content: center;
   align-items: center;
   &:hover{
      /* opacity: 0.10000000149011612; */
      background: var(--color-5, #253B4E);   
   }
`

export { Foot, FootWraper, FootLlist, FootLlist_heat, FootLlist_item_link, FootLlist_item, FootLlist_item_icon, FootIcon, FootIconChi }