import styled from 'styled-components' 

export const Container = styled.div`
    display:  flex;
    justify-content:space-around;
   
   @media (max-width: 800px) {
        flex-direction: column;
        
   }
`