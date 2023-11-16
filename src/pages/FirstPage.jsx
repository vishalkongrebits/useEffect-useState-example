import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PopUpWithoutPortal from '../components/portal/PopUpWithoutPortal'
import { Button } from 'react-bootstrap'
import { createPortal } from 'react-dom'
import MyComponent from '../components/hoc/MyComponent'
import HocStyleComponent from '../components/hoc/HocStyleComponent'


const FirstPage = () => {
    const navigate = useNavigate()
    const [showModal, setshowModal] = useState(false)
    const [showPortal, setshowPortal] = useState(false)

    const component = {}

    const handleNestedFirst = () => {
        // some code here 
        const id = '1331'
        navigate(`/firstPage/nestedFirst/${id}`)
    }

    const handleModalButtonClick = () => {
        setshowModal(true)
    }

    const closeModal = () => {
        setshowModal(false)
    }

    const handleShowPortal = () => {
      setshowPortal(true)
    }

    const handleClosePortal = () => {
      setshowPortal(false)
    }

    const RedTextComponent = HocStyleComponent(MyComponent)

  return (
    <div className='container'>
      {showModal && <PopUpWithoutPortal closeModal={closeModal} showModal={showModal} />}
      <div>
      {showPortal &&  createPortal(<PopUpWithoutPortal closeModal={handleClosePortal} showModal={showPortal} />, document.getElementById('portal'))}
      </div>
        <h1>FirstPage</h1>
        <Link className='Link' to='/firstPage/nestedFirst' >Nested First</Link>
        <div>
            <button onClick={handleNestedFirst}>Go to nested with name</button>
        </div>
        <div className='m-3'>
          <Button onClick={handleModalButtonClick}>Pop-Up without Portal</Button>
        </div>
        <div className='m-3'>
          <Button onClick={handleShowPortal}>Pop-Up with Portal</Button>
        </div>

         {/* HOC example */}

        <div className='m-3'>
          <MyComponent>this is from my component</MyComponent>
        </div>
        <div className='m-3'>
          <RedTextComponent style={{fontSize:50}}>this is from my Hoc component</RedTextComponent>
        </div>

        {/* uncomment below code for error boundry example */}
        {/* <div className='m-3'>
          <MyComponent>this is from my {component.text.one}</MyComponent>
        </div> */}
    </div>
  )
}

export default FirstPage