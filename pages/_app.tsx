import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'
import Navbar from './../components/Navbar'
import { UserContext } from './../lib/context'

function MyApp({ Component, pageProps }) {
  return (
    <UserContext.Provider value={{ user: {}, username: 'tyler' }}>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  )
}

export default MyApp
