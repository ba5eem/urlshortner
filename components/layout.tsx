import Link from "next/link"
import { useRouter } from "next/router"

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <>
      <div>


      </div>
      {children}
      <div className="site-footer">
        <p>Baseem Missaghi, all rights reserved &copy;</p>
      </div>
    </>
  )
}
