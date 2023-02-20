import Link from 'next/link'

// This should be findable
export default function Header() {
  return (
    <header>
      <div className='container'>
        <Link href='/' passHref>
          <h2>Dev Blog</h2>
        </Link>
      </div>
    </header>
  )
}
