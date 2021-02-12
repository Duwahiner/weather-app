import { Global, css, ThemeProvider } from '@emotion/react'
import { Provider  } from 'react-redux'
import { Flex } from 'rebass'
import theme from '../src/theme'
import { store } from '../src/store'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Flex
            width={1}
          >
            <Component {...pageProps} />
          </Flex>
        </ThemeProvider>
      </Provider>
      <Global
        styles={
          css`
            body {
              background-color: #E1E8F0;
            }
            
            body::-webkit-scrollbar {
              display: block;
              background: #F6F6F6;
              width: 8px
            }
            
            body::-webkit-scrollbar-thumb {
              background: #D6DBDF;
              border-radius: 8px;
            }

            body::-webkit-scrollbar-thumb:hover{
              background: #aabbf2;
              box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
            }
          `
        }
      />
    </div>
  )
}

export default MyApp
