import styled from '@emotion/styled'
import { Flex } from 'rebass'

export const Container = styled(Flex)`
    width: 100%;
    height: 400px;
    position: relative;
`
export const ContainerImage = styled(Flex)`
    width: 23px;
    height: 23px;
    border: solid 2px #fff;
    overflow: hidden;
    border-radius: 8px;
    margin-left: -5px;
    box-sizing: border-box;
    background-color:
        ${({ theme }) => theme.colors.destello};

`
export const Text = styled.span`
    font-family: ${({ fontFamily }) => !fontFamily ? 'RobotoRegular' : fontFamily};;
    font-size: ${({ fontSize }) => !fontSize ? '12px' : fontSize};
    color: ${({ color, theme }) => !color ? theme.colors.container : color};
`
