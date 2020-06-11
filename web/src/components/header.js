import {Link} from 'gatsby'
import React from 'react'
import styled from '@emotion/styled'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'

const Burger = styled('button')`
  cursor: pointer;

  :hover {
    color: #156dff;
  }
`

const X = styled('button')`
  p:hover {
    color: #fff;
    background-color: #156dff;
  }
`

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'>J | Y</Link>
        <Burger className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
          <Icon symbol='hamburger' />
        </Burger>
      </div>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/blogs/'>Blogs</Link>
          </li>
          <li>
            <Link to='/invite/'>Invite</Link>
          </li>
        </ul>
        <X className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
          <p>X</p>
        </X>
      </nav>
    </div>
  </div>
)

export default Header
