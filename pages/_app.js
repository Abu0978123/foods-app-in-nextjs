import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Foot from './foot'

export default function App({ Component, pageProps }) {
  return <>
          <Navbar/>
          <Component {...pageProps} />
          <Foot/>
         </>
}  
