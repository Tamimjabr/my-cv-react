import { styled } from '@mui/material/styles'

export const StyledContainer = styled('div')`
  width: 100%;
  margin: auto; 
  padding: 0;
  margin:0;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
  min-height: 50vh;
  display: flex;
  flex-flow:column nowrap;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 800px){
    width: 100%;
  }
  @media print {
  display:block;
  & div{
    break-inside: avoid;
  }
}
`