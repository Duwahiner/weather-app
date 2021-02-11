import styled from '@emotion/styled'
import { Flex } from 'rebass'

export const Container = styled(Flex)`
    width: 100%;
    height: 400px;
    position: relative;
`
export const Text = styled.span`
    font-family: ${({ fontFamily }) => !fontFamily ? 'RobotoRegular' : fontFamily};;
    font-size: ${({ fontSize }) => !fontSize ? '12px' : fontSize};
    color: ${({ color, theme }) => !color ? theme.colors.container : color};
`
