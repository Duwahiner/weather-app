import styled from '@emotion/styled'
import { Flex } from 'rebass'

export const ContentItem = styled(Flex)`
    height:
        ${({ height }) => height};
    border-radius: 30px;
    background-color:
        ${({ theme }) => theme.colors.background};
    background:
        url(${({ backgroundImage }) => backgroundImage})
        center center no-repeat;
    background-size: cover;
    box-shadow: 0px 30px 65px 0px ${({ shadows }) => !shadows ? '0' : shadows};
`
export const Text = styled.span`
    font-family: ${({ fontFamily }) => !fontFamily ? 'RobotoRegular' : fontFamily};;
    font-size: ${({ fontSize }) => !fontSize ? '12px' : fontSize};
    color: ${({ color, theme }) => !color ? theme.colors.container : color};
`
