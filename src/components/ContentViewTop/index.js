import { useTheme } from '@emotion/react'
import { ReactSVG } from 'react-svg'
import { Box, Flex } from 'rebass'
import ItemsVisit from '../ItemsVisit'
import { Container, Text, ContainerImage } from './styles'

const ContentViewTop = (props) => {
  const theme = useTheme()

  return (
    <Container
      minWidth='224px'
      width={1} px={2}
      mb={[5, 5, 2]}
      flexDirection='column'
      maxWidth={['auto', '480px', '100%']}
    >
      <Flex width={1} justifyContent='space-between' mb={4} mt='5px'>
        <Flex>
          <Box mr='5px' width='9px'> <ReactSVG src='svg/s-10.svg' /> </Box>
          <Box mr={1}>
            <Text
              fontFamily='RobotoBold'
              fontSize='10px'
              color={theme.colors.span}
            >
              Top Reviews
            </Text>
          </Box>
        </Flex>
        <Flex>
          <ContainerImage justifyContent='center' alignItems='center'>
            <img src='/image/fd-7.png' width='100%' height='100%' />
          </ContainerImage>
          <ContainerImage justifyContent='center' alignItems='center'>
            <img src='/image/fd-9.png' width='100%' height='100%' />
          </ContainerImage>
          <ContainerImage justifyContent='center' alignItems='center'>
            <img src='/image/fd-8.png' width='100%' height='100%' />
          </ContainerImage>
          <ContainerImage justifyContent='center' alignItems='center'>
            <Text
              fontFamily='RobotoRegular'
              fontSize='10px'
              color={theme.colors.container}
            >
              6+
            </Text>
          </ContainerImage>
        </Flex>
      </Flex>

      <Flex width={1}>
        <ItemsVisit
          title='Art Science'
          subTitle='Museum'
          backgroundImage='/image/fd-5.png'
          height={['120px', '120px', '80px']}
          shadows=''
          urlSvg='svg/s-8.svg'
        />
      </Flex>

      <Flex width={1} mt='20px' flex='auto' sx={{ position: 'relative' }}>
        <Flex
          width='60px'
          height={['200px', '250px', '120px']}
          flex='auto'
          justifyContent='center'
          alignItems='center'
          bg={theme.colors.secondary}
          sx={{
            position: 'absolute',
            top: '0px',
            right: '0px',
            borderRadius: '30px',
            cursor: 'pointer',
            transition: 'all 0.5s',
            ':hover': {
              backgroundColor: theme.colors.primary
            }
          }}
        >
          <Text
            fontFamily='RobotoRegular'
            fontSize='20px'
            color={theme.colors.container}
          >
            +
          </Text>
        </Flex>
        <ItemsVisit
          title='Fountain'
          subTitle='of Varnoth'
          backgroundImage='/image/fd-4.png'
          height={['200px', '250px', '120px']}
          shadows=''
          urlSvg='svg/s-8.svg'
        />
      </Flex>
    </Container>
  )
}

export default ContentViewTop
