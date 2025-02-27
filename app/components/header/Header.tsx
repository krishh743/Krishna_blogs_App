import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>
          <a>Krishna's Blog</a>
        </span>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><span ><a>Home</a></span></li>
          <li><span ><a>Blog</a></span></li>
          <li><span ><a>About</a></span></li>
          <li><span ><a>Contact</a></span></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header