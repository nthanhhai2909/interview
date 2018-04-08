import React, { Component } from 'react'

const Navbar = ({ name, intro, idavatar }) => {

    let urlImg = "./image/avatar/" + idavatar + ".jpg"
    return (
        <div className="navbar-custom container">
            <span id="brand" className="text-uppercase ">ARCHY</span>
            <div className="intro">
                <img src={urlImg} className="rounded-circle" alt="avatar" width="30" />
                <span>{name}</span>
            </div>
            <div>
                {intro}
            </div>

            <span id="icon">®</span>
        </div>
    )

}
export default Navbar