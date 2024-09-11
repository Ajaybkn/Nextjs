import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <Link href="/">
        <button>Go to Home</button>
      </Link>
        <h1>product list</h1>
        <p><Link href='products/1'>product 1</Link></p>
        <p><Link href='products/2' >product 2</Link></p>
        <p><Link href='products/3'>product 3</Link></p>
       
    </div>
  )
}

export default page