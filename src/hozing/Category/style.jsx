import styled from "styled-components";

const CategoryList = styled.div`
   display: flex;
   justify-content: space-between;
   position: relative;

`
const CategoryListitms = styled.div`
   position: relative;
   margin-top:32px;
   width: 280px;
   height: 350px;
   background: #000;
`
const CategoryListwrapper = styled.div`
   position: absolute;
   left : 50%;
   top: 145px;
   transform: translateX(-50%);
   z-index: 2;
   color: red;
   display: flex;
   flex-direction: column;
   gap: 24px;
   justify-content: center;
   align-items: center;
`
const CategoryListitmsicon = styled.div`

`
const CategoryListitmsicontitle = styled.div`
   color: #FFF;
   font-size: 18px;
   font-weight: 600;
   line-height: 28px; /* 155.556% */
   `

export { CategoryList, CategoryListitms, CategoryListitmsicon, CategoryListitmsicontitle, CategoryListwrapper }