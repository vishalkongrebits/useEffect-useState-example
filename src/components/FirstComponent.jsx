import React, { useEffect, useState } from 'react'

const FirstComponent = () => {

    const [update, setupdate] = useState(0)

    const loadData = () => {}

    const releaseData = () => {}

    useEffect(() => {
        //mounting phase
     console.log('first component mounted')
      return () => {
        //unmounting phase
        console.log('first component unmounted')
      }
    }, [update]) // update phase

    useEffect(() => {
     console.log('second useEffect called');
    }, [])
    
    

  return (
    <div>FirstComponent 
        <h5>update:{update}</h5>
        <button onClick={() => setupdate(update + 1)}>Update</button>
         </div>
  )
}

export default FirstComponent