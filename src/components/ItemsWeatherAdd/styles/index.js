import styled from '@emotion/styled'
import { Flex } from 'rebass'

export const ContentItem = styled(Flex)`
    height: 180px;
    border-radius: 15px;
    background-color:
        ${({ theme }) => theme.colors.container};
    border:
        solid 1px
        ${({ theme }) => theme.colors.border};
    box-sizing: border-box;
    overflow: hidden;
`

export const ButtonAdd = styled(Flex)`
    width: 120px;
    line-height: 25px;
    border-radius: 30px;
    cursor: pointer;
    background-color:
        ${({ theme }) => theme.colors.buttons};
    transition: all 0.3s;
    &:hover {
        background-color:
            ${({ theme }) => theme.colors.secondary};
    }
`
export const ContainerImage = styled(Flex)`
    width: 100%;
    height: auto;
    overflow: hidden;
    margin-left: 0px;
`

export const Text = styled.span`
    font-family: ${({ fontFamily }) => !fontFamily ? 'RobotoRegular' : fontFamily};;
    font-size: ${({ fontSize }) => !fontSize ? '12px' : fontSize};
    color: ${({ color, theme }) => !color ? theme.colors.container : color};
`
