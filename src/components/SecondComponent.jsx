import React, { useEffect } from 'react'

const SecondComponent = () => {

    useEffect(() => {
        console.log('second component mounted')
       
         return () => {
           console.log('second component unmounted')
         }
       }, [])

  return (
    <div>SecondComponent</div>
  )
}

export default SecondComponent