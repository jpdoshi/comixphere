import React from 'react'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const AppBar = () => {
  return (
    <nav className="app-bar">
      <div className="nav-items">
        <div className="nav-item">
          <Link to={'/'}>
            <a>
              <motion.i
                initial={{ x: '-50%', y: '-50%' }}
                whileHover={{ scale: '1.35' }}
                whileTap={{ scale: '0.9' }}
                className="las la-bars"
              />
            </a>
          </Link>
        </div>
        <div className="nav-item">
          <Link to={'/settings'}>
            <a>
              <motion.i
                initial={{ x: '-50%', y: '-50%' }}
                whileHover={{ scale: '1.35' }}
                whileTap={{ scale: '0.9' }}
                className="las la-cog"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="nav-items">
        <div className="nav-item">
          <Link to={'/info'}>
            <a>
              <motion.i
                initial={{ x: '-50%', y: '-50%' }}
                whileHover={{ scale: '1.35' }}
                whileTap={{ scale: '0.9' }}
                className="las la-info-circle"
              />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default AppBar
