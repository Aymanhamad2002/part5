import  { useState } from 'react'

const Togglable = (props) => {

  const [visible,setVisible] = useState(false)

  const hideWhenVisible = { display:visible ? 'none' : '' }
  const showWhenVisible = { display : visible ? '' : 'none' }


  const handleVisibility = () => {
    setVisible(! visible)


  }

  return(<div>
    <div style = {hideWhenVisible}>
      <button onClick={handleVisibility}>{props.buttonLabel} </button>
    </div>
    <div style = {showWhenVisible}>
      {props.children}
      <div><button onClick = {handleVisibility}>cancel</button></div>

    </div>
  </div>)


}
export default Togglable