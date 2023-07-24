import React from "react";
import { Wraper, WraperHeader, Contaener, Btn, ListUl } from "../style"
import {
   RecomTitle, Paragrft, CartWrapper, Cart, Imgs, Img, ImgBnt, ImgsAvatar,
   Mean, CartTitle, Cartpargrf, CartIcon, CartIconSsh, CartIconSshText, CartInst,
   CartFooter, Hr, FInst, Fdel, FIcon, Strelka, Strelkaleft
} from "../recommended/style"
import { CategoryList, CategoryListitms, CategoryListitmsicon, CategoryListitmsicontitle, CategoryListwrapper } from "../Category/style"

import { Wrapper, WhtItmst, WhtItmstIcon, WhtItmstTitle, WhtItmstParagrf } from "../Why/style"
import { Testimonial, TestimonialText, TestimonialAVATAR, TestimonialtITL, TestimonialName } from "./styled"
import Avatar from "../recommended/imgH/avatar3.png"
let Testimonials = () => {
   return <div>
      <Wrapper>
         <Contaener>
            <RecomTitle>
               Testimonials
            </RecomTitle>
            <Paragrft>
               Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
            </Paragrft>

            <CategoryList>
               <Testimonial>
                  <TestimonialText>
                     “ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “
                     <TestimonialAVATAR src={Avatar}>
                        
                     </TestimonialAVATAR>
                     
                  
                  </TestimonialText>
                  
                  <TestimonialtITL>
                     Marvin McKinney
                  </TestimonialtITL>

                  <TestimonialName>
                     Designer
                  </TestimonialName>
               </Testimonial>

               <Testimonial>
                  <TestimonialText>
                     “ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “
                     <TestimonialAVATAR src={Avatar}>

                     </TestimonialAVATAR>


                  </TestimonialText>

                  <TestimonialtITL>
                     Marvin McKinney
                  </TestimonialtITL>

                  <TestimonialName>
                     Designer
                  </TestimonialName>
               </Testimonial>
               
               <Testimonial>
                  <TestimonialText>
                     “ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “
                     <TestimonialAVATAR src={Avatar}>

                     </TestimonialAVATAR>


                  </TestimonialText>

                  <TestimonialtITL>
                     Marvin McKinney
                  </TestimonialtITL>

                  <TestimonialName>
                     Designer
                  </TestimonialName>
               </Testimonial>

                  <Strelka>
                     <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M9.33358 5.53176L3.99343 0.191706C3.86992 0.068097 3.70504 0 3.52924 0C3.35343 0 3.18856 0.068097 3.06504 0.191706L2.67178 0.584873C2.41588 0.841066 2.41588 1.25745 2.67178 1.51326L7.15604 5.99751L2.6668 10.4867C2.54329 10.6104 2.4751 10.7751 2.4751 10.9508C2.4751 11.1267 2.54329 11.2915 2.6668 11.4152L3.06007 11.8083C3.18368 11.9319 3.34846 12 3.52426 12C3.70006 12 3.86494 11.9319 3.98845 11.8083L9.33358 6.46336C9.45738 6.33936 9.52538 6.1738 9.52499 5.99781C9.52538 5.82112 9.45738 5.65566 9.33358 5.53176Z" fill="#0D263B" />
                     </svg>
                  </Strelka>

                  <Strelkaleft>
                     <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M9.33358 5.53176L3.99343 0.191706C3.86992 0.068097 3.70504 0 3.52924 0C3.35343 0 3.18856 0.068097 3.06504 0.191706L2.67178 0.584873C2.41588 0.841066 2.41588 1.25745 2.67178 1.51326L7.15604 5.99751L2.6668 10.4867C2.54329 10.6104 2.4751 10.7751 2.4751 10.9508C2.4751 11.1267 2.54329 11.2915 2.6668 11.4152L3.06007 11.8083C3.18368 11.9319 3.34846 12 3.52426 12C3.70006 12 3.86494 11.9319 3.98845 11.8083L9.33358 6.46336C9.45738 6.33936 9.52538 6.1738 9.52499 5.99781C9.52538 5.82112 9.45738 5.65566 9.33358 5.53176Z" fill="#0D263B" />
                     </svg>
               </Strelkaleft>

               
            </CategoryList>
         </Contaener>
      </Wrapper>
   </div>
}

export default Testimonials