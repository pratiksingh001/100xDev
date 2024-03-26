import React from 'react'
import Todo from './Todo'

const WrapperComponent = ({children}) => {

  return (
    <div style={{"border": "2px solid red", "borderRadius": "5px", "padding": "20px", "background": "blue"}}>
        {children}
    </div>
  )
}

export default WrapperComponent