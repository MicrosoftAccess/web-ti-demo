import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { store } from '../store'
import { Provider } from 'react-redux'
import { StyledEngineProvider } from '@mui/material/styles';
export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <StyledEngineProvider injectFirst>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </StyledEngineProvider>
      </SessionProvider>
    </>
  )

}
