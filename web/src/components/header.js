import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'>J | Y</Link>
        <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
          <Icon symbol='hamburger' />
        </button>
      </div>
      

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/blogs/'>About</Link>
          </li>
          <li>
            <Link to='/blogs/'>Blogs</Link>
          </li>
          <li>
            <Link to='/endorsements/'>Endorsements</Link>
          </li>
          <li>
            <Link to='/invite/'>Invite</Link>
          </li>
        </ul>
        <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
          <p>X</p>
        </button>
      </nav>
    </div>
  </div>
)

export default Header
