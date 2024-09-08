import React from 'react'

const RadialGradiant = ({ size = 300 }) => {
  const gradientStyle = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: `9999px`,
    background: 'radial-gradient(circle at 50% 50%, rgba(61, 220, 151, 1) 0%, rgba(10, 37, 64, 1) 100%)',
  }

  return <div style={gradientStyle}></div>
}

export default RadialGradiant
