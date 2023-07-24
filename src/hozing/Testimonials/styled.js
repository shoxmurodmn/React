import styled from "styled-components";

const Testimonial = styled.div`
      margin-top:32px
`
const TestimonialText = styled.div`
   width: 284px;
   padding:40px 48px 60px 48px;
   background-color: #fff;
   text-align: center;
   position: relative;
   border-radius:5px;
`
const TestimonialAVATAR = styled.img`
 border: 2px solid #fff;
 border-radius: 50%;
 position : absolute;
 top: 100%;
 left: 50%;
 transform: translate(-50%, -50%)
`
const TestimonialtITL = styled.div`
   color: var(--color-2, #0D263B);
   text-align: center;
   font-size: 16px;
   font-weight: 600;
   line-height: 24px; /* 150% */
   margin-top: 37px
   `
const TestimonialName = styled.div`
   color: var(--text-color, #696969);
   text-align: center;
   font-family: Montserrat;
   font-size: 16px;
   font-style: normal;
   font-weight: 400;
   line-height: 24px; /* 150% */
    margin-top: 4px
`

export { Testimonial, TestimonialText, TestimonialAVATAR, TestimonialtITL, TestimonialName }