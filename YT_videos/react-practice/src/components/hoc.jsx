import React, { Component } from 'react'
import ReactPortals from './react-portals'
/**
 * in this i would be looking at higher order components
 * basically, HOC are components that another component as arguements
 * const UpdatedComponent = (NewComponent) ={
 *  render() {
 *      
 * }
 * }
 *  */ 
const UpdatedComponent = (OriginalComponent)=>{
    class NewComponent extends Component{
        constructor(props) {
          super(props)
        
          this.state = {
              
          }
          const { name } = this.props
        }
        render(){
            return <OriginalComponent />
        }
    }
    return NewComponent;
}
export default UpdatedComponent;