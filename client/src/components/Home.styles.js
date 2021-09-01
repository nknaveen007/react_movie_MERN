import styled from 'styled-components'

export const ThumpContainer = styled.div`
   box-shadow: 0 2px 4px 0;
   border-radius: 20px 20px 10px 10px;
   
`
export const MovieText = styled.div`
    margin: 6px 10px;
    
  h3{
      margin: 0 0;
      font-size: var(--fontMed);

      @media (max-width:786px){
        font-size: var(--fontSmall);
      }
  }
  p{
      margin: 2px 0;
      font-size: var(--fontSmall);
  }
`