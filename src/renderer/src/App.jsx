import React from 'react'
import { motion } from 'framer-motion'

const App = () => {
  return (
    <motion.h1
      whileHover={{
        y: -4
      }}
    >
      Comixphere
    </motion.h1>
  )
}

export default App
