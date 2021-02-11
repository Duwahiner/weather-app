import { Flex } from 'rebass'
import Header from '../Header'
import Layout from '../Layout'
import Section from '../Sections'

const PageHome = (props) => {
  return (
    <Flex
      width={1}
      flexDirection='column'
      sx={{
        height: '100vh'
      }}
    >
      <Header />
      <Layout>
        <Section />
      </Layout>
    </Flex>
  )
}

export default PageHome
