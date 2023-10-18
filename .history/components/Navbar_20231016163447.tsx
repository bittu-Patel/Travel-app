import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { NAV_LINKS } from '@/constants'
import { link } from 'fs'

const Navbar = () => {
  return (
<nav className='flexBetween max-container padding-container relative z-30 py-5'>
<Link href="/">

<Image src="/hilink-logo.svg" alt='logo' width={74} height={74}/>
    <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map((link) => (
            <Link href="'"
        ))}

    </ul>
    </Link>

</nav>
    )
}

export default Navbar