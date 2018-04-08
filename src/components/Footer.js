import React, { Component } from 'react'

const Footer = ({ day, place, city, country }) => {
    return (
        <div className="container footer">
            <div className="row">
                <div className="col-md-3 col-sm-12 show-day">
                    {day}
                </div>
                <div className="col-md-7 col-sm-12 intro-footer">
                    <button>dinosys</button>
                    <span id="introplace" className="text-uppercase">{place}</span>
                    <span id="introcountry" className="text-uppercase">{city}, {country} </span>
                </div>
                <div className="col-md-2 col-sm-12 read-more">
                    <p>READ MORE</p>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Footer