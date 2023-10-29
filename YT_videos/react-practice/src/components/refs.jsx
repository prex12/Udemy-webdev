import React from 'react'

// forwardRef is used as a type of react ref for functional components but the parent component must be a class component to be 

//  to be able to get this ref. this is implemented as 
/**
 * so basically we do this like this
 * const functionName = (React.forwardRef(props, ref) =>{
 *  return(
 *      <input type = "text" name = "name" onChange = {} value = {} ref = {ref} />
 *  )
 * })
 * 
 */
const Refs= React.ForwardRef=(props, ref)=>{
    return (
      <div>
              <input name='fName' type="text" ref={ref} />
          </div>
    )
}

export default Refs