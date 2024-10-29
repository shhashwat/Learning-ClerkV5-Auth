import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-cyan-950 rounded-b-xl' >
        <ul className="flex justify-between py-4 px-6">
            <div>
                <Link href="/">
                    <li>Home</li>
                </Link>
            </div>
        </ul>
    </div>
  )
}

export default Navbar