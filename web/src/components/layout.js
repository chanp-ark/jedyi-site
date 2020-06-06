import React from 'react'
import {Link} from 'gatsby'
import Header from './header'

import SocialLinks from '../components/social-links/social-link'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, siteTitle, onHideNav, onShowNav, showNav}) => {
  console.log('layout', {children, siteTitle, onHideNav, onShowNav, showNav})
  return (
    <>
      <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
      <div className={styles.content}>{children}</div>
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <div className='footer-nav'>
            <div>
              <Link to='/invite'>Invite</Link>
            </div>
            <SocialLinks className='social-links-footer' />
          </div>
          <div className={styles.siteInfo}>
            © {new Date().getFullYear()} by{' '}
            <a href='https://www.linkedin.com/in/chan-y-park/'>Chan Park</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout
