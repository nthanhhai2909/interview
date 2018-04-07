import React, { Component } from 'react'

const Footer = ({}) => {
    return(
        <div className="container footer">
            <div className="row">
                <div className="col-md-3 show-day">
                26
                </div>
                <div className="col-md-7 intro-footer">
                <button>dinosys </button>
                <span id="introplace"className="text-uppercase">vietnam </span>
                <span id="introcountry"className="text-uppercase">vietnam </span>
                </div>
                <div className="col-md-2 read-more">
                <p>READ MORE</p>
                <hr />
                </div>
            </div>
        </div>
    )
}

export default Footer