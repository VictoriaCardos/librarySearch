import styled from 'styled-components'

export const HeaderSection = styled.header`
  background: #202F3C;
  position: fixed; /* Tornar o cabeçalho fixo */
  top: 0; /* Posicionar o cabeçalho no topo da página */
  width: 100%; /* Largura total do cabeçalho */
  z-index: 1000; /* Valor alto de z-index para garantir que o cabeçalho fique acima de outros elementos */
`

export const HeaderTitle = styled.h1`
  margin: 0;
  padding: 15px 0;
  color:#FFFFFF;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  width: 100%;
`

export const HeaderSubtitle = styled.h3`
margin: 0;
padding: 15px 0;
color:#FFFFFF;
font-size: 30px;
font-weight: 700;
text-align: center;
width: 100%;

`