import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <div class="header row">
        <div class="nav-link"><Link to='/'>Home</Link></div>
        <div class="nav-link"><Link to='/bowlers'>Bowlers</Link></div>
        <div class="nav-link"><Link to='/records'>Records</Link></div>
        <div class="nav-link"><Link to='/about'>About</Link></div>
      </div>
    </nav>
  </header>
)

export default Header