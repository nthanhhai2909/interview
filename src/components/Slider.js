import React, { Component } from 'react'

const Slider = ({width}) => (
    <div id="myProgress">
    <div id="myBar" style={{width: width + "%"}}></div>
  </div>
)


export default Slider