import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Loader from './../components/Loader'
import toast from 'react-hot-toast'

export default function Home() {
  return (
    <div>
      <Link
        prefetch={false}
        href={{
          pathname: '/[username]',
          query: { username: 'lawls' },
        }}
      >
        <a>go to admin</a>
      </Link>
      <Loader show={true} />
      <div>
        <button onClick={() => toast.success('hello toast!')}>
          toaster example
        </button>
      </div>
    </div>
  )
}
