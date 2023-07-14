import styled from 'styled-components'

export let Rtt = styled('div')`
background-color: blue;
display: flex ;
gap: 10px ;
justify-content: center;
padding: 20px; 
`

function getSize(prots) {
   switch (prots.type) {
      case 'large': return "200px"
      case 'medium': return "150px"
      case 'small': return "100px"
      default : return "150px"
   }
}

export let Box = styled.div`
   width: ${getSize} ;
   height: ${getSize};
   border: 2px solid red ; 
   display: flex ;
   gap: 10px ;
   justify-content: center;
   align-items: center;
   color: wheat;
   font-size: 32px;
`