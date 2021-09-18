import Link from 'next/link'

export default function PostPage({}) {
  return (
    <main>
      <h1>POSTPAGE</h1>
      <Link href='/abc'>
        <a>abc's profile</a>
      </Link>
    </main>
  )
}
