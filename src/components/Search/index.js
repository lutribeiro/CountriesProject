import React from 'react'
import './styles.css'

function Search ({filterByRegion, filterByName, debouncedValue}){
    return(
        <div className= "containerSearch">
          <div className="inputPosition">
            <link rel="stylesheet" 
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" 
                  integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" 
                  crossorigin="anonymous" 
            />
            <i className= "fas fa-search"/> 
            <input
                onChange={(e)=> filterByName(e.target.value)}
                value={debouncedValue}
                className= "inputStyle"
                placeholder="Search for a country..."/>
          </div>
          <div className="selectedPosition">
            <select 
              className="selectedStyle"
              onChange={(e)=> filterByRegion(e.target.value)} 
            >
                <option
                    disabled selected hidden="Filter by Region"> 
                    Filter by Region
                </option>
                <option value="Africa">Africa</option>
                <option value="Americas"> America</option>
                <option value="Asia"> Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
    )
}export default Search