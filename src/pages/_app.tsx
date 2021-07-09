import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { useStore } from '../store'
import { createGlobalStyle } from 'styled-components'
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
  color: inherit;
  text-decoration: none;
  }
  `

function MyApp({ Component, pageProps }: AppProps) {

  const store = useStore(pageProps.initialReduxState)
  
  return (
    <Provider store={store}>
      <ConfigProvider locale={ptBR}>
        <GlobalStyle/>
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  )
}
export default MyApp
