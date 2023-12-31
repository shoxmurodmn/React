import { Wraper, WraperHeader, Contaener, Btn, ListUl } from "../style"
import { Foot, FootWraper, FootLlist, FootLlist_heat, FootLlist_item_link, FootLlist_item, FootLlist_item_icon, FootIcon, FootIconChi } from "./styled"
// import fecboock from "./icon/fesbook.svg"
// import tvintr from "./icon/tvin.svg"
// import instagram from "./icon/insta.svg"
// import IN from "./icon/in.svg"
let Footer = () => {
   return <div>
      <Foot>
         <Contaener>
            <FootWraper>
               <FootLlist>
                  <FootLlist_heat>
                     Contact Us
                  </FootLlist_heat>

                  <FootLlist_item>
                     <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                           <path d="M9 3.86914C7.15739 3.86914 5.65829 5.36824 5.65829 7.21085C5.65829 9.05346 7.15739 10.5526 9 10.5526C10.8426 10.5526 12.3417 9.05346 12.3417 7.21085C12.3417 5.36824 10.8426 3.86914 9 3.86914ZM9 9.14553C7.93322 9.14553 7.06532 8.27763 7.06532 7.21085C7.06532 6.14407 7.93322 5.27616 9 5.27616C10.0668 5.27616 10.9347 6.14407 10.9347 7.21085C10.9347 8.27763 10.0668 9.14553 9 9.14553Z" fill="white" />
                           <path d="M9.00014 0C5.02393 0 1.78906 3.2349 1.78906 7.21107V7.41041C1.78906 9.42135 2.94198 11.7647 5.21588 14.3753C6.86429 16.2679 8.48967 17.5875 8.55801 17.6427L9.00014 18L9.44226 17.6428C9.51064 17.5875 11.136 16.2679 12.7844 14.3754C15.0583 11.7647 16.2112 9.42138 16.2112 7.41045V7.21111C16.2112 3.2349 12.9763 0 9.00014 0ZM14.8042 7.41045C14.8042 10.8088 10.4254 14.9226 9.00014 16.1715C7.57444 14.9222 3.19609 10.8086 3.19609 7.41045V7.21111C3.19609 4.01077 5.79979 1.40706 9.00014 1.40706C12.2005 1.40706 14.8042 4.01077 14.8042 7.21111V7.41045Z" fill="white" />
                        </svg>
                     </div>
   
                     <FootLlist_item_link href="#">
                        329 Queensberry Street, North Melbourne VIC 3051, Australia.
                     </FootLlist_item_link>                  
                  </FootLlist_item>

                  <FootLlist_item>
                     <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                           <g clip-path="url(#clip0_1987_23049)">
                              <path d="M12.937 18C12.3559 18 11.7798 17.8973 11.2165 17.6926C8.7346 16.791 6.43091 15.3226 4.55435 13.4461C2.67778 11.5696 1.20937 9.26582 0.307821 6.78396C0.01811 5.98637 -0.0673865 5.16305 0.0537921 4.33677C0.167307 3.5628 0.467107 2.81144 0.920815 2.16388C1.37653 1.51348 1.98407 0.972523 2.67775 0.599495C3.41747 0.201718 4.22487 0 5.07759 0C5.3428 0 5.57201 0.185301 5.62759 0.444603L6.51046 4.56471C6.55044 4.75128 6.4931 4.9454 6.35821 5.08033L4.84961 6.58889C6.27275 9.41836 8.582 11.7276 11.4115 13.1507L12.92 11.6421C13.055 11.5073 13.2491 11.45 13.4356 11.4899L17.5558 12.3728C17.8151 12.4283 18.0004 12.6576 18.0004 12.9228C18.0004 13.7755 17.7986 14.5829 17.4008 15.3226C17.0278 16.0163 16.4868 16.6239 15.8364 17.0796C15.1889 17.5333 14.4376 17.8331 13.6636 17.9466C13.421 17.9822 13.1785 18 12.937 18ZM4.62817 1.14956C3.50339 1.27373 2.50507 1.86328 1.84212 2.80947C1.09662 3.87343 0.922784 5.18206 1.36517 6.3999C3.09844 11.1713 6.82911 14.902 11.6005 16.6353C12.8183 17.0776 14.127 16.9038 15.191 16.1583C16.1372 15.4954 16.7267 14.497 16.8509 13.3723L13.4992 12.654L11.9237 14.2295C11.756 14.3972 11.5013 14.4417 11.2868 14.3409C7.94039 12.7688 5.23164 10.06 3.65952 6.71365C3.55873 6.4991 3.60323 6.24437 3.77089 6.07675L5.34638 4.50126L4.62817 1.14956Z" fill="white" />
                           </g>
                           <defs>
                              <clipPath id="clip0_1987_23049">
                                 <rect width="18" height="18" fill="white" />
                              </clipPath>
                           </defs>
                        </svg>
                     </div>

                     <FootLlist_item_link href="#">
                        +998 94 469 8898 
                     </FootLlist_item_link>
                  </FootLlist_item>

                  <FootLlist_item>
                     <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                           <path d="M15.8906 2.39062H2.10938C0.946266 2.39062 0 3.33689 0 4.5V13.5C0 14.6631 0.946266 15.6094 2.10938 15.6094H15.8906C17.0537 15.6094 18 14.6631 18 13.5V4.5C18 3.33689 17.0537 2.39062 15.8906 2.39062ZM16.5938 13.5C16.5938 13.8877 16.2783 14.2031 15.8906 14.2031H2.10938C1.72167 14.2031 1.40625 13.8877 1.40625 13.5V4.5C1.40625 4.1123 1.72167 3.79688 2.10938 3.79688H15.8906C16.2783 3.79688 16.5938 4.1123 16.5938 4.5V13.5Z" fill="white" />
                           <path d="M16.4746 3.26758L9.0002 8.82707L1.52584 3.26758L0.686523 4.39592L9.0002 10.5797L17.3139 4.39592L16.4746 3.26758Z" fill="white" />
                        </svg>
                     </div>

                     <FootLlist_item_link href="#">
                        murodmamatov8898@gmail.com
                     </FootLlist_item_link>

                  </FootLlist_item>

                     <FootIcon>
                        
                        <FootIconChi>
                           <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.5508 3.59668C13.0977 3.18652 13.5898 2.69434 13.9727 2.12012C13.4805 2.33887 12.9062 2.50293 12.332 2.55762C12.9336 2.20215 13.3711 1.65527 13.5898 0.97168C13.043 1.2998 12.4141 1.5459 11.7852 1.68262C11.2383 1.1084 10.5 0.780273 9.67969 0.780273C8.09375 0.780273 6.80859 2.06543 6.80859 3.65137C6.80859 3.87012 6.83594 4.08887 6.89062 4.30762C4.51172 4.1709 2.37891 3.02246 0.957031 1.2998C0.710938 1.70996 0.574219 2.20215 0.574219 2.74902C0.574219 3.7334 1.06641 4.6084 1.85938 5.12793C1.39453 5.10059 0.929688 4.99121 0.546875 4.77246V4.7998C0.546875 6.19434 1.53125 7.34277 2.84375 7.61621C2.625 7.6709 2.35156 7.72559 2.10547 7.72559C1.91406 7.72559 1.75 7.69824 1.55859 7.6709C1.91406 8.81934 2.98047 9.63965 4.23828 9.66699C3.25391 10.4326 2.02344 10.8975 0.683594 10.8975C0.4375 10.8975 0.21875 10.8701 0 10.8428C1.25781 11.6631 2.76172 12.1279 4.40234 12.1279C9.67969 12.1279 12.5508 7.78027 12.5508 3.97949C12.5508 3.84277 12.5508 3.7334 12.5508 3.59668Z" fill="white" />
                           </svg>
                        </FootIconChi>

                           <FootIconChi>
                              <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M7.125 3.2959C5.375 3.2959 3.98047 4.71777 3.98047 6.44043C3.98047 8.19043 5.375 9.58496 7.125 9.58496C8.84766 9.58496 10.2695 8.19043 10.2695 6.44043C10.2695 4.71777 8.84766 3.2959 7.125 3.2959ZM7.125 8.49121C6.00391 8.49121 5.07422 7.58887 5.07422 6.44043C5.07422 5.31934 5.97656 4.41699 7.125 4.41699C8.24609 4.41699 9.14844 5.31934 9.14844 6.44043C9.14844 7.58887 8.24609 8.49121 7.125 8.49121ZM11.1172 3.18652C11.1172 2.77637 10.7891 2.44824 10.3789 2.44824C9.96875 2.44824 9.64062 2.77637 9.64062 3.18652C9.64062 3.59668 9.96875 3.9248 10.3789 3.9248C10.7891 3.9248 11.1172 3.59668 11.1172 3.18652ZM13.1953 3.9248C13.1406 2.94043 12.9219 2.06543 12.2109 1.35449C11.5 0.643555 10.625 0.424805 9.64062 0.370117C8.62891 0.31543 5.59375 0.31543 4.58203 0.370117C3.59766 0.424805 2.75 0.643555 2.01172 1.35449C1.30078 2.06543 1.08203 2.94043 1.02734 3.9248C0.972656 4.93652 0.972656 7.97168 1.02734 8.9834C1.08203 9.96777 1.30078 10.8154 2.01172 11.5537C2.75 12.2646 3.59766 12.4834 4.58203 12.5381C5.59375 12.5928 8.62891 12.5928 9.64062 12.5381C10.625 12.4834 11.5 12.2646 12.2109 11.5537C12.9219 10.8154 13.1406 9.96777 13.1953 8.9834C13.25 7.97168 13.25 4.93652 13.1953 3.9248ZM11.8828 10.0498C11.6914 10.5967 11.2539 11.0068 10.7344 11.2256C9.91406 11.5537 8 11.4717 7.125 11.4717C6.22266 11.4717 4.30859 11.5537 3.51562 11.2256C2.96875 11.0068 2.55859 10.5967 2.33984 10.0498C2.01172 9.25684 2.09375 7.34277 2.09375 6.44043C2.09375 5.56543 2.01172 3.65137 2.33984 2.83105C2.55859 2.31152 2.96875 1.90137 3.51562 1.68262C4.30859 1.35449 6.22266 1.43652 7.125 1.43652C8 1.43652 9.91406 1.35449 10.7344 1.68262C11.2539 1.87402 11.6641 2.31152 11.8828 2.83105C12.2109 3.65137 12.1289 5.56543 12.1289 6.44043C12.1289 7.34277 12.2109 9.25684 11.8828 10.0498Z" fill="white" />
                              </svg>
                           </FootIconChi>
                           <FootIconChi>
                              <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M12.5508 3.59668C13.0977 3.18652 13.5898 2.69434 13.9727 2.12012C13.4805 2.33887 12.9062 2.50293 12.332 2.55762C12.9336 2.20215 13.3711 1.65527 13.5898 0.97168C13.043 1.2998 12.4141 1.5459 11.7852 1.68262C11.2383 1.1084 10.5 0.780273 9.67969 0.780273C8.09375 0.780273 6.80859 2.06543 6.80859 3.65137C6.80859 3.87012 6.83594 4.08887 6.89062 4.30762C4.51172 4.1709 2.37891 3.02246 0.957031 1.2998C0.710938 1.70996 0.574219 2.20215 0.574219 2.74902C0.574219 3.7334 1.06641 4.6084 1.85938 5.12793C1.39453 5.10059 0.929688 4.99121 0.546875 4.77246V4.7998C0.546875 6.19434 1.53125 7.34277 2.84375 7.61621C2.625 7.6709 2.35156 7.72559 2.10547 7.72559C1.91406 7.72559 1.75 7.69824 1.55859 7.6709C1.91406 8.81934 2.98047 9.63965 4.23828 9.66699C3.25391 10.4326 2.02344 10.8975 0.683594 10.8975C0.4375 10.8975 0.21875 10.8701 0 10.8428C1.25781 11.6631 2.76172 12.1279 4.40234 12.1279C9.67969 12.1279 12.5508 7.78027 12.5508 3.97949C12.5508 3.84277 12.5508 3.7334 12.5508 3.59668Z" fill="white" />
                              </svg>
                           </FootIconChi>
                           <FootIconChi>
                              <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M7.62891 8.31543L8.01172 5.7998H5.57812V4.15918C5.57812 3.44824 5.90625 2.79199 7 2.79199H8.12109V0.631836C8.12109 0.631836 7.10938 0.44043 6.15234 0.44043C4.15625 0.44043 2.84375 1.6709 2.84375 3.8584V5.7998H0.601562V8.31543H2.84375V14.4404H5.57812V8.31543H7.62891Z" fill="white" />
                              </svg>

                           </FootIconChi>
                        
                     </FootIcon>
                  
               </FootLlist>

               <FootLlist>
                  <FootLlist_heat>
                     Chicago
                  </FootLlist_heat>

                  <FootLlist_item>
                     <FootLlist_item_link>
                        Discover
                     </FootLlist_item_link>
                  </FootLlist_item>

                  <FootLlist_item>
                     <FootLlist_item_link>
                        Los Angeles
                     </FootLlist_item_link>
                  </FootLlist_item>

                  <FootLlist_item>
                     <FootLlist_item_link>
                        Miami
                     </FootLlist_item_link>
                  </FootLlist_item>

                  <FootLlist_item>
                     <FootLlist_item_link>
                        New York
                     </FootLlist_item_link>
                  </FootLlist_item>

               </FootLlist>

               <FootLlist>
                  <FootLlist_heat>
                     Lists by Category
                  </FootLlist_heat>

                  <FootLlist_item>
                     <FootLlist_item_link>
                        Apartments
                     </FootLlist_item_link>
                  </FootLlist_item>

                  <FootLlist_item>
                     <FootLlist_item_link>
                        Condos
                     </FootLlist_item_link>
                  </FootLlist_item>

                  <FootLlist_item>
                     <FootLlist_item_link>
                        Houses
                     </FootLlist_item_link>
                  </FootLlist_item>


                  <FootLlist_item>
                     <FootLlist_item_link>
                        Offices
                     </FootLlist_item_link>
                  </FootLlist_item>


                  <FootLlist_item>
                     <FootLlist_item_link>
                        Retail
                     </FootLlist_item_link>
                  </FootLlist_item>


                  <FootLlist_item>
                     <FootLlist_item_link>
                        Villas
                     </FootLlist_item_link>
                  </FootLlist_item>



               </FootLlist>


               <FootLlist>
                  <FootLlist_heat>
                     Lists by Category
                  </FootLlist_heat>

                  <FootLlist_item>
                     <FootLlist_item_link>
                        About Us
                     </FootLlist_item_link>
                  </FootLlist_item>

                  <FootLlist_item>
                     <FootLlist_item_link>
                        Terms & Conditions
                     </FootLlist_item_link>
                  </FootLlist_item>

                  <FootLlist_item>
                     <FootLlist_item_link>
                        Support Center
                     </FootLlist_item_link>
                  </FootLlist_item>

                  <FootLlist_item>
                     <FootLlist_item_link>
                        Contact Us
                     </FootLlist_item_link>
                  </FootLlist_item>

               </FootLlist>
            </FootWraper>

         </Contaener>
      </Foot>
   </div>
}

export default Footer