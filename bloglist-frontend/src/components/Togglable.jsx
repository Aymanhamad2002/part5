import  { useState, forwardRef,useImperativeHandle } from 'react'

const Togglable = forwardRef ((props,refs) => {
  const [visible,setVisible] = useState(false)
  const hideWhenVisible = { display:visible ? 'none' : '' }
  const showWhenVisible = { display : visible ? '' : 'none' }


  const handleVisibility = () => {
    setVisible(! visible)
  }
  useImperativeHandle(refs, () => {
    return {
      handleVisibility
    }
  })

  return(<div>
    <div style = {hideWhenVisible}>
      <button onClick={handleVisibility}>{props.buttonLabel} </button>
    </div>
    <div style = {showWhenVisible}>
      {props.children}
      <div><button onClick = {handleVisibility}>cancel</button></div>

    </div>
  </div>)

})
export default Togglable