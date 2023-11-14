import Image from 'next/image'
import { Inter } from 'next/font/google'
import c0 from '../public/connie/Connie0.png'
import StatusBar from '@/components/statusBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className=""
    >
      {/* <p>text at the top</p>
      <button className='btn-blue'>button</button>
      <button className='btn-gray'>button</button>
      <button className='btn-transparent'>button</button>
      <h1>defined word</h1>
      <h2>definition + answer desc</h2>
      <h2 className='.badge-desc'>badge desc</h2>
      <h3>answer header</h3>
      <input type="text" placeholder="type here"/> */}

      <StatusBar fraction='1/4'/>

      <div className='flex flex-col w-full'>
        <p>
          Meet Connie - Connie is doing her daily affirmations. <br/><br/>
        
          Affirmations are positive statements you tell yourself to remind yourself of all the amazing things about you.
        </p>
      </div>

      <Image
        src={c0}
        alt="Connie0"
        className="object-fill"
      />

      <div className='flex flex-col w-full'>
        <button className='btn-blue'>Hi Connie!</button>
        <button className='btn-transparent'>Maybe Later</button>
      </div>

    </main>
  )
}
