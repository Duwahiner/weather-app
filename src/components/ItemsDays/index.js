import { useTheme } from '@emotion/react'
import { Box, Flex } from 'rebass'
import { ReactSVG } from 'react-svg'
import { ContentItem, Text } from './styles'

const ItemsDays = ({
  title,
  subTitle,
  degrees,
  urlSvg
}) => {
  const theme = useTheme()

  return (
    <ContentItem mb='10px'>
      <Flex width={1} justifyContent='space-between' alignItems='center'>
        <Flex flex='auto' height='30px' alignItems='center'>
          <Box mx='10px' width='23px'> <ReactSVG src={urlSvg} /> </Box>
          <Flex flex='none' flexDirection='column'>

            <Box>
              <Text
                fontFamily='RobotoBold'
                color={theme.colors.text} fontSize='13px'
              >
                {title}
              </Text>
            </Box>

            <Box mt='-5px'>
              <Text
                fontFamily='Roboto'
                fontSize='10px' color={theme.colors.span}
              >
                {subTitle}
              </Text>
            </Box>
          </Flex>
        </Flex>

        <Flex
          width='70px'
          height='70px'
          bg={theme.colors.secondary}
          justifyContent='center'
          alignItems='center'
          flex='none'
          sx={{
            borderRadius: '15px'
          }}
        >
          <Box>
            <Text
              fontFamily='RobotoBold'
              fontSize='13px' color={theme.colors.container}
            >
              {degrees}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </ContentItem>
  )
}

export default ItemsDays
