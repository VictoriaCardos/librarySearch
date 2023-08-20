import styled from 'styled-components'

export const CardContainer = styled.div`
background-color: #3498DB; /* Cor de fundo do card */
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  max-width: 300px;
  margin: 130px auto; /* Centraliza o card e adiciona espaço abaixo do header */
`
export const CardImage = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 4px;
`

export const CardTitle = styled.h3`
    font-size: 18px;
    color: #202F3C; /* Cor do título do card */
    margin: 8px 0;
`

export const CardDescription = styled.p`
    font-size: 14px;
    color: #FFFFFF; /* Cor da descrição do card */
`