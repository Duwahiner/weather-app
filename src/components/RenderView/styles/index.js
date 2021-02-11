import styled from '@emotion/styled'
import { Flex } from 'rebass'

export const Container = styled(Flex)`
    width: 100%;
    max-width: 1200px;
    border-radius: 40px;
    background-color: ${(props) => props.theme.colors.container};
    box-shadow: 14px 30px 65px 0px ${({ theme }) => theme.colors.shadows};
`
