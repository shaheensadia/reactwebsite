import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 text-center">
      All rights reserved &copy; {new Date().getFullYear()}
    </footer>
  )
}

export default Footer