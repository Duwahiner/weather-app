import { useTheme } from '@emotion/react'
import { Box, Flex } from 'rebass'
import { ReactSVG } from 'react-svg'
import { ContentItem, Text } from './styles'

const ItemsVisit = ({
  backgroundImage,
  height,
  shadows,
  urlSvg,
  title,
  subTitle

}) => {
  const theme = useTheme()

  return (
    <ContentItem
      width={1}
      mb='10px'
      bg='red'
      flex='none'
      backgroundImage={backgroundImage}
      height={height}
      shadows={shadows}
    >
      <Flex width={1} mt='20px' ml={2}>
        <Box mx='10px' width='12px'> <ReactSVG src={urlSvg} /> </Box>

        <Flex flexDirection='column'>
          <Box>
            <Text fontFamily='RobotoBold' color={theme.colors.containes} fontSize='12px'>
              {title}
            </Text>
          </Box>
          <Box>
            <Text fontFamily='RobotoBold' color={theme.colors.containes} fontSize='12px'>
              {subTitle}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </ContentItem>
  )
}

export default ItemsVisit
