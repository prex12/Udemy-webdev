import React from 'react'
// react portals allow us to render elements out of the parent node in our HTML file
// we go to the HTML file and add another node there
// first import the reactDOM 
import ReactDOM from 'react-dom'
import './css/react-portal.css'

function ReactPortals(){
    return (ReactDOM.createPortal(
    <div className="portal">
        hello portal
    </div>
    , document.getElementById('portal')))
}


export default ReactPortals