import { useTheme } from '@emotion/react'
import { Box, Flex } from 'rebass'
import { ReactSVG } from 'react-svg'
import { ContentItem, Text } from './styles'

const ItemsWeather = ({
  degreeNumber,
  degree,
  name,
  subName,
  urlSvg,
  textItem1,
  textItem2,
  textItem3
}) => {
  const theme = useTheme()

  return (
    <ContentItem
      mb='15px'
      shadows={theme.colors.shadowsItem}
      flexDirection='column'
    >
      <Flex
        width={1}
        justifyContent='space-between'
        alignItems='center'
      >
        <Flex
          width='80px'
          height='80px'
          bg={theme.colors.background}
          justifyContent='center'
          alignItems='center'
          flex='none'
          sx={{
            borderRadius: '15px'
          }}
        >
          <Box width='50px'> <ReactSVG src={urlSvg} /> </Box>
        </Flex>
        <Flex
          flex='auto'
          height='30px'
          alignItems='center'
          justifyContent='center'
        >
          <Flex flex='none'>
            <Box mr='2px'>
              <Text
                fontFamily='RobotoBold'
                color={theme.colors.colorText} fontSize='30px'
              >
                {degreeNumber}
              </Text>
            </Box>

            <Box mr='10px'>
              <Text
                fontFamily='RobotoBold'
                color={theme.colors.secondary} fontSize='10px'
              >
                {degree}
              </Text>
            </Box>

            <Flex
              maxWidth='100px'
              maxHeight='40px'
              flexDirection='column'
              overflow='hidden'
              sx={{ borderLeft: `solid 1px ${theme.colors.span}` }}
              flex='none'
            >
              <Box ml='10px'>
                <Text
                  fontFamily='RobotoBold'
                  fontSize='13px'
                  color={theme.colors.colorText}
                >
                  {name}
                </Text>
              </Box>
              <Box ml='10px'>
                <Text
                  fontFamily='Roboto'
                  fontSize='10px' color={theme.colors.span}
                >
                  {subName}
                </Text>
              </Box>
            </Flex>

          </Flex>
        </Flex>
      </Flex>
      <Flex py='10px' px='20px' justifyContent='center'>
        <Flex
          flex='none' pr='10px'
          justifyContent='center'
          alignItems='center'
          sx={{ borderRight: `solid 1px ${theme.colors.span}` }}
        >
          <Text
            fontFamily='Roboto'
            fontSize='10px'
            color={theme.colors.span}
          >
            {textItem1}
          </Text>
        </Flex>
        <Flex
          flex='auto'
          justifyContent='center'
          alignItems='center'
          sx={{ borderRight: `solid 1px ${theme.colors.span}` }}
        >
          <Text
            fontFamily='Roboto'
            fontSize='10px' color={theme.colors.span}
          >
            {textItem2}
          </Text>
        </Flex>

        <Flex
          flex='none' pl='10px'
          justifyContent='center' alignItems='center'
        >
          <Text
            fontFamily='Roboto'
            fontSize='10px' color={theme.colors.span}
          >
            {textItem3}
          </Text>
        </Flex>
      </Flex>
    </ContentItem>
  )
}

export default ItemsWeather
