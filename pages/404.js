import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000)
  }, [])//empty array here for useEffect lets function only fire on 1st pageload

  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found :(</h2>
      <p>Going back to the <Link href="/"><a>Homepage</a></Link> in 5 seconds...</p>
    </div>
  );
}
 
export default NotFound;