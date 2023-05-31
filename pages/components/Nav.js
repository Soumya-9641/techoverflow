import React from 'react'
import styles from '../../styles/Home.module.css'
import Link from 'next/link';

function Nav() {
  return (
    <nav className={styles.nav}>
       
          <ul>
          <li>
          <Link href={'/'}>
          <a>Home</a>
          </Link>
          </li> 
           <li>
           <Link href={'/components/Contact'}>
          <a> Contact Us </a>
           </Link>
           </li>
           <li>
           <Link href={'/components/Blog'}>
          <a> Blog</a>
          </Link>
           </li>
           <li>
           <Link href={'/components/About'}>
          <a>About</a>
          </Link> 
           </li>
          </ul>
       

        </nav>
  )
}

export default Nav