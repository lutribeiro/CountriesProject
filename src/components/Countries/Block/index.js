import React from 'react'
import './styles.css'

function Block(props) {

    return(
        <div className="block">
            <div className= "flag">
                <img src= {props.flag}/>
            </div>
            <div className="infoContainer">
                <div className="title">
                    <a>{props.title}</a>
                </div>
                <div className="data">
                    <div className="population">
                        <h4>Population: </h4>
                        <label> {props.population}</label>
                    </div>
                    <div className="region">
                        <h4>Region: </h4>
                        <label>{props.region}</label>
                    </div>
                    <div className="capital">
                        <h4>Capital: </h4>
                        <label> {props.capital}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}export default Block