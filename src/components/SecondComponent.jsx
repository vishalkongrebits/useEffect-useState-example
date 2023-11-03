import React, { useEffect } from 'react'

const SecondComponent = () => {

    // useEffect(() => {
    //     console.log('second component mounted')
       
    //      return () => {
    //        console.log('second component unmounted')
    //      }
    //    }, [])

    console.log('second component rendered');

  return (
    <div>SecondComponent</div>
  )
}

export default SecondComponent