import '@/styles/globals.css'
import { Poppins } from 'next/font/google'
// import Layout from '@/components/Layout'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400','500','600'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable}`}>
      {/* <Layout> */}
        <Component {...pageProps} />
      {/* </Layout> */}
    </main>
  )
}
 