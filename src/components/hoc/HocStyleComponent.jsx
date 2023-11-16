import React from 'react'

const HocStyleComponent = (WrappedComponent) => {
    const EnhancedComponent = (props) => {
        return <WrappedComponent {...props} style={{ ...props.style, color: 'red' }} />;
      };
  return EnhancedComponent;
}

export default HocStyleComponent