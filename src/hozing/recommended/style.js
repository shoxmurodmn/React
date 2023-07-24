import styled from "styled-components";

const RecomTitle = styled.div`
   color:  #0D263B;
   text-align: center;
   font-size: 28px; 
   font-size: 28px;
   font-weight: 600;
   line-height: 36px; 
   letter-spacing: -0.56px;
   padding-top: 96px;
`
const Paragrft = styled.div`
   color: var(--text-2, #696969);
   font-size: 16px;
   font-weight: 400;
   line-height: 24px; /* 150% */
   margin-top:8px;
   text-align: center;
 

`

const CartWrapper = styled.section`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   position: relative;
     margin-top:32px;

`
const Cart = styled.div`
   border-radius: 3px;
   border: 1px solid var(--border-color, #E6E9EC);
   background: var(--color-5, #FFF);
`

const Imgs = styled.div`
   position: relative;
   width: 381px;
   height: 220px;
`
const Img = styled.img`
border-radius: 3px 3px 0 0 ;
width:100%;


`

const ImgBnt = styled.div`
  
   display: flex;
   width: 73px;
   height: 23px;
   color: var(--color-5, #FFF);
   font-size: 10px;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
   justify-content: center;
   align-items: center;
   border-radius: 4px;
   gap: 10px;
   background-color: ${(props) => (props.bgcolor ? "#0061DF" : "#0D263B")};
   color: #fff;
   position: absolute ;
   top: 20px;
   left: ${(props) => (props.positsiya && "20px")};
   right: ${(props) => (!props.positsiya && "20px")};

   `
const ImgsAvatar = styled.img`
   position: absolute;
   top: 100%;
   right:20px;
   transform: translateY(-50%);
   border: 2px solid white;
   border-radius: 50%;
     fill: #FFF;
filter: drop-shadow(0px 0px 10px rgba(13, 38, 59, 0.20));



`
const Mean = styled.div`
   padding: 24px 20px 16px 20px;
`

const CartTitle = styled.div`
   color: var(--color-2, #0D263B);
   font-family: Montserrat;
   font-size: 16px;
   font-style: normal;
   font-weight: 600;
   line-height: 24px; /* 150% */
`

const Cartpargrf = styled.div`
   color: var(--text-color, #696969);
   font-family: Montserrat;
   font-size: 14px;
   font-style: normal;
   font-weight: 400;
   line-height: 20px; /* 142.857% */
`
const CartIcon = styled.div`
   display: flex;
   align-items: center;
   margin:16px 0;
   justify-content: space-between;
`
const CartIconSsh = styled.div`
   display: flex;
   flex-direction:column;
   align-items: center;

`
const CartIconSshText = styled.div`
   color: var(--text-color, #696969);
   font-family: Montserrat;
   font-size: 14px;
   font-style: normal;
   font-weight: 400;
   line-height: 20px; /* 142.857% */

`

const CartFooter = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin:8px 20px;

`
const CartInst = styled.div`
display: flex;
flex-direction: column;
`
const Hr =styled.div`
   background: #E6E9EC;
   width: 100%;
   height: 1px;
`
const Fdel = styled.del`
   color: var(--text-color, #696969);
   font-family: Montserrat;
   font-size: 12px;
   font-style: normal;
   font-weight: 400;
   line-height: 20px; /* 166.667% */
   /* text-decoration-line: line-through */

`
const FInst = styled.div`
   color: var(--color-2, #0D263B);
   font-family: Montserrat;
   font-size: 16px;
   font-style: normal;
   font-weight: 600;
   line-height: 24px; /* 150% */

`
const FIcon = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 30px;

`
const Strelka = styled.div`
position: absolute;
left: calc(100% + 52px);
top: 50%;
   width: 45px;
   height: 45px;
   border-radius: 50%;
   background-color: #fff;
   display: flex;
   justify-content: center;
   align-items: center;
   box-sizing: border-box;
    &:hover{
   box-shadow:0px 0px 50px rgb(13, 38, 59);
   }
box-shadow:0px 0px 50px rgba(13, 38, 59,0.4);
`
const Strelkaleft = styled.div`
   position: absolute;
   transform: rotate(180deg);
   right: calc(100% + 52px);
   top: 50%;
   width: 45px;
   height: 45px;
   border-radius: 50%;
   background-color: #fff;
   display: flex;
   justify-content: center;
   align-items: center;
   box-sizing: border-box;
   box-shadow:0px 0px 50px rgba(13, 38, 59,0.4);
   &:hover{
   box-shadow:0px 0px 50px rgb(13, 38, 59);
   }
`

export {
   RecomTitle, Paragrft, CartWrapper, Cart, Imgs, Img, ImgBnt, ImgsAvatar,
   Mean, CartTitle, Cartpargrf, CartIcon, CartIconSsh, CartIconSshText, CartInst, CartFooter,
   Hr, FInst, Fdel, FIcon, Strelka, Strelkaleft
}