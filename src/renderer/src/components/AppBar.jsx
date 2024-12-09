import React from 'react'

import { motion } from 'framer-motion'

const AppBar = () => {
  return (
    <nav className="app-bar">
      <div className="nav-items">
        <div className="nav-item">
          <motion.a href="/" className="title">
            <i className="las la-home active" />
          </motion.a>
        </div>
      </div>
      <div className="nav-items">
        <div className="nav-item">
          <motion.a href="/settings" className="title">
            <i className="las la-cog" />
          </motion.a>
        </div>
      </div>
    </nav>
  )
}

export default AppBar
