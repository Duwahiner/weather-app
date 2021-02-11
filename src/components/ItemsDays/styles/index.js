import styled from '@emotion/styled'
import { Flex } from 'rebass'

export const ContentItem = styled(Flex)`
    height: 70px;
    border-radius: 15px;
    border:
        solid 1px
        ${({ theme }) => theme.colors.border};
    box-sizing: border-box;
`
export const Text = styled.span`
    font-family: ${({ fontFamily }) => !fontFamily ? 'RobotoRegular' : fontFamily};;
    font-size: ${({ fontSize }) => !fontSize ? '12px' : fontSize};
    color: ${({ color, theme }) => !color ? theme.colors.container : color};
`
