import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
function Nav() {
  return (
    <nav className={styles.nav}>
       
          <ul>
          <li>
          <Link href="/">
          <a>Home</a>
          </Link>
          </li> 
           <li>
           <Link href="/Contact">
          <a> Contact Us </a>
           </Link>
           </li>
           <li>
           <Link href="/Blog">
          <a> Blog</a>
          </Link>
           </li>
           <li>
           <Link href="/About">
          <a>About</a>
          </Link> 
           </li>
          </ul>
       

        </nav>
  )
}

export default Nav