import '@/styles/globals.css'
import Layout from "../../components/layout"
import { store } from '../../components/reduxx'
import { Provider } from 'react-redux'
import { reducer } from '../../components/reduxx'
import { createStore } from 'redux';

export default function App({ Component, pageProps }) {
  const store = createStore(reducer);

  return (
    <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>

  )
}
