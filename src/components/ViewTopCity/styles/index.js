import styled from '@emotion/styled'
import { Flex } from 'rebass'

export const Container = styled(Flex)`
    width: 100%;
    height: 400px;
    position: relative;
`
export const Background = styled(Flex)`
    border-radius: 40px;
    background-color:
        ${({ theme }) => theme.colors.background};
    background:
        url(${({ theme }) => theme.url.pack1})
        center center no-repeat;
    background-size: cover;
`

export const WeatherIcon = styled(Flex)`
    width: 100px;
    height: auto;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.secondary};
    flex: none;
    border-radius: 0px 26px 26px 0px;
    box-shadow: 10px 35px 40px 0px ${({ theme }) => theme.colors.shadowsIcon};
`
export const Text = styled.span`
    font-family: ${({ fontFamily }) => !fontFamily ? 'RobotoRegular' : fontFamily};;
    font-size: ${({ fontSize }) => !fontSize ? '12px' : fontSize};
    color: ${({ color, theme }) => !color ? theme.colors.container : color};
`
