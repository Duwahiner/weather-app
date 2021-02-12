import { useTheme } from '@emotion/react'
import { Box, Flex } from 'rebass'
import { ReactSVG } from 'react-svg'
import { useSelector } from 'react-redux'
import { Background, Container, WeatherIcon, Text } from './styles'
import { getIcon } from '../../config'

const ViewTopCity = (props) => {
  const theme = useTheme()
  const { bogotaColombia } = useSelector(state => state.data)

  return (
    <Container
      width={1} flexDirection='column'
      justifyContent='center'
    >
      <Flex
        width={1}
        px={['10px', '40px']}
        pt={['10px', '40px']}
        pb='30px' flex='auto'
      >
        <Background
          flex='atuo'
          width={1} height='100%'
          alignItems='center'
        >
          <Flex
            width={[1]}
            ml={['25px', '0px', '90px']}
            flexDirection='column'
            justifyContent='center'
            alignItems={['center', 'flex-start', 'flex-start']}
            height='180px'
          >
            <Flex
              width={[1]}
              lignItems='center'
              justifyContent={['center', 'flex-start', 'flex-start']}
            >
              <Box width='20px' height='20px' mr={2}>
                <ReactSVG src='svg/s-9.svg' />
              </Box>
              <Box>
                <Text
                  color={theme.colors.secondary}
                  fontSize='20px' fontFamily='RobotoBold'
                >
                  {bogotaColombia?.name}
                </Text>
              </Box>
            </Flex>
            <Flex flex='auto' alignItems='center'>
              <Box ml={3} width='100px' height='auto' mr={2}>
                <ReactSVG src='svg/s-7.svg' />
              </Box>
            </Flex>
          </Flex>
        </Background>
      </Flex>
      <WeatherIcon flexDirection='column'>
        <Flex
          width={1}
          height='100px'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          bg={theme.colors.primary}
          sx={{
            borderRadius: '0px 26px 26px 10px'
          }}
        >
          <Box width='70px' height='auto'>
            <ReactSVG src={getIcon(bogotaColombia?.weather[0].main) || ''} />
          </Box>
          <Box ml='5px' mt='-12px'>
            <Text fontSize='12px'>
              {bogotaColombia?.weather[0].main}
            </Text>
          </Box>
        </Flex>
        <Flex
          width={1}
          height='90px'
          justifyContent='center'
          alignItems='center'
        >
          <Box>
            <Text
              fontFamily='RobotoBold'
              color={theme.colors.container}
              fontSize='50px'
            >
              {bogotaColombia?.main.temp_max}
            </Text>
          </Box>

          <Box mt='-20px'>
            <Text
              fontFamily='RobotoBold'
              color={theme.colors.container}
              fontSize='15px'
            >
              °C
            </Text>
          </Box>
        </Flex>
      </WeatherIcon>
    </Container>
  )
}

export default ViewTopCity
