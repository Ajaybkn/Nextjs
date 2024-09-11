import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <div >This is home page</div>
    <Link href='/blog'>
    <button>Blog</button>
    </Link>
    <br />
    <br />
    <br />
    <Link href='/products'>
    <button>Products</button>
    </Link>
    </>
  )
}

export default page