import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href='/'>
          <a>
          <Image src="/logo.png" alt="site logo" width={117} height={53} />
          </a>
        </Link>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/top-headlines"><a>Top Headlines</a></Link>
      <Link href="/sport"><a>Sport</a></Link>
      <Link href="/business"><a>Business</a></Link>
    </nav>
  );
}
 
export default Navbar;