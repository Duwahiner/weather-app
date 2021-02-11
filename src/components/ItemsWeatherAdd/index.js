import { useTheme } from '@emotion/react'
import { Flex } from 'rebass'
import { ContentItem, Text, ButtonAdd, ContainerImage } from './styles'

const ItemsWeatherAdd = (props) => {
  const theme = useTheme()

  return (
    <ContentItem
      flex='auto' pt={3}
      shadows={theme.colors.shadowsItem}
      flexDirection='column'
      alignItems='center'
    >
      <Flex width={1} justifyContent='center' alignItems='center' pt='10px'>
        <ButtonAdd justifyContent='center' alignItems='center'>
          <Text fontFamily='RobotoBold' color={theme.colors.primary} fontSize='11px'>
            Add Location
          </Text>
        </ButtonAdd>
      </Flex>
      <Flex width={1} flex='auto' alignItems='flex-end'>
        <ContainerImage justifyContent='center' alignItems='center'>
          <img src='/image/fd-6.png' width='auto' height='auto' />
        </ContainerImage>
      </Flex>
    </ContentItem>
  )
}

export default ItemsWeatherAdd
