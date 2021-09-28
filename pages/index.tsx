import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Loader from './../components/Loader'

export default function Home() {
  return (
    <div>
      <Link
        prefetch={false}
        href={{
          pathname: '/[username]',
          query: { username: 'jeffd23' },
        }}
      >
        <a>go to admin</a>
      </Link>
      <Loader show={true} />
    </div>
  )
}
