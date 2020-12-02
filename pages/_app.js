import AppState from "../components/AppState"

function MyApp({ Component, pageProps }) {
  return <AppState>
    <Component {...pageProps} />
  </AppState>
}

export default MyApp
