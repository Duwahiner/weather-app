import styled from '@emotion/styled'

export const Title = styled.h1`
  font-family: RobotoRegular;
  font-size: 30px;
  color: ${props => props.theme.colors.text}
`
export const NotFound = styled.h3`
  font-family: RobotoBold;
  font-size: 100px;
  color: ${props => props.theme.colors.text}
`
export const ButtonPage = styled.a`
    padding: 5px 30px;
  display: block;
  outline: none;
  border: none;
  border-radius: 40px;
  font-family: Roboto;
  font-size: 20px;
  color: ${props => props.theme.colors.container};
  text-align: center;
  line-height: 50px;
  background-color: ${props => props.theme.colors.secondary};
  transition: all 0.4s;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`
