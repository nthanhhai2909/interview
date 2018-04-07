import React, { Component } from 'react'

const Navbar = ({ name, intro, idavatar }) => {

    let urlImg = "./image/avatar/" + idavatar + ".jpg"
    return (
        <div className="navbar-custom container">
            <span id="brand" className="text-uppercase ">ARCHY</span>
            <div className="intro">
                <img src={urlImg} className="rounded-circle" alt="avatar" width="40" />
                <span>{name}</span>
            </div>
            <div>
                {intro}
            </div>

            <img src="./image/icon/next.png" alt="avatar" width="20" height="15" />

        </div>
    )

}
export default Navbar