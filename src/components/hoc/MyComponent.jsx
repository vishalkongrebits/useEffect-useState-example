import React from 'react'

const MyComponent = (props) => {
  return (
    <div>
        <p style={props.style}>{props.children}</p>
    </div>
  )
}

export default MyComponent