import React from 'react'
import {Link} from 'gatsby'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className='footer-nav'>
          <Link to='/invite'>Invite</Link>
          <div className='social-links'>
            <Link>F</Link>
            <Link>I</Link>
            <Link>E</Link>
            <Link>S</Link>
            <Link>Y</Link>
          </div>
        </div>
        <div className={styles.siteInfo}>
          © {new Date().getFullYear()} by <a href='https://www.sanity.io'>Chan Park</a>
        </div>
      </div>
    </footer>
  </>
)

export default Layout
