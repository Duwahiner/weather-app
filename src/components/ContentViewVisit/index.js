import { useTheme } from '@emotion/react'
import { Box, Flex } from 'rebass'
import ItemsVisit from '../ItemsVisit'
import { Container, Text } from './styles'

const ContentViewVisit = (props) => {
  const theme = useTheme()

  return (
    <Container
      minWidth='260px'
      maxWidth={['auto', '480px', '100%']}
      width={1} px={2}
      mb={[5, 5, 2]}
      flexDirection='column'
      height={['auto', 'auto', '350px']}
    >
      <Flex width={1} justifyContent='center' mb={[3, 4]}>
        <Box mr={1}>
          <Text
            fontFamily='RobotoBold'
            fontSize='23px'
            color={theme.colors.colorText}
          >
            Plase to
          </Text>
        </Box>
        <Box>
          <Text
            fontFamily='RobotoRegular'
            fontSize='23px'
            color={theme.colors.colorText}
          >
            Visit
          </Text>
        </Box>
      </Flex>

      <ItemsVisit
        title='Arab street'
        subTitle='Singapure'
        backgroundImage='/image/fd-3.png'
        height='230px'
        shadows={theme.colors.span}
        urlSvg='svg/s-8.svg'
      />
    </Container>
  )
}

export default ContentViewVisit
