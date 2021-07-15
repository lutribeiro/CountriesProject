import React, { useState, useEffect } from 'react'
import './styles.css'
import {Link, useLocation} from 'react-router-dom'
import {getCountryByName} from '../../services/requests'

function Flag (){

    const {countryName} = useLocation()
    console.log(countryName)

    const [currentCountry, setCurrentCountry] = useState(countryName)

    const [country, setCountry] = useState({})
    const[isLoading, setIsLoading] = useState(true)

    useEffect(() =>{
        const fetchCountry = async () => {
        try {
            setIsLoading(true)
            const response = await getCountryByName(currentCountry)
            console.log(response)
            setCountry(response.data[0])
        } catch (error) { 
        console.log(error) 
        } finally{
            setIsLoading(false)
            } 
        }
        fetchCountry()

    }, [currentCountry]) 

    console.log(country)
    
    if (isLoading) {
        return(
            <p>Loading...</p>
        )
    }
    return(
        <div className="containerFlag">
            <div className="back">
                <link rel="stylesheet" 
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" 
                    integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" 
                    crossorigin="anonymous" 
                />
                <i className= "fas fa-long-arrow-alt-left"/> 
                <Link to='/' className="linkBack">
                    Back
                </Link>
            </div>
            <div className="countryContainer">
                <div className="flagImage">
                    <img src= {country.flag}/>
                </div>
                <div className="countryDetails">
                    <div className="columns">
                        <div className="fisrtColumn">
                            <div className="name">
                                <h1> {country.name} </h1>
                            </div>
                            <div className="nativeName">            
                                <h4>Native Name: </h4>
                                <label> {country.nativeName}</label>
                            </div>

                            <div className="populationCountry">
                                <h4>Population: </h4>
                                <label> {country.population}</label>
                            </div>

                            <div className="regionCountry">
                                <h4>Region: </h4>
                                <label> {country.region}</label>
                            </div>

                            <div className="subregion">
                                <h4>Sub Region: </h4>
                                <label> {country.subregion}</label>
                            </div>

                            <div className="capitalCountry">
                                <h4>Capital: </h4>
                                <label> {country.capital}</label>
                            </div>
                        </div>         
                        
                        <div className="secondColumn">
                            <div className="topLove">
                                <h4>Top Love Domain: </h4>
                                <label> {country.topLevelDomain} </label>
                            </div>

                            <div className="currencies">
                                <h4>Currencies: </h4>
                                {country.currencies?.map((currencies, index)=> 
                                    (<label>
                                        {currencies.name}{index < country.currencies.length-1 && ','}
                                    </label>)
                                )}
                            </div>

                            <div className="language">
                                <h4>Language: </h4>
                                {country.languages?.map((language, index)=> 
                                    (<label>
                                        {language.name}{index < country.languages.length-1 && ','}
                                    </label>)
                                )}
                            </div>
                        </div>   
                    </div>  
                    <div className="borderCountries">
                        <h3> Border Countries: </h3>
                        {country.borders?.map((country)=> 
                                    (<div
                                        className="allBorderCountries" 
                                        onClick= {()=> setCurrentCountry(country)}>
                                        {country}
                                    </div>)
                        )}            
                    </div>     
                <div/> 
                       
                
            </div>
        </div>
    </div>

    )
}export default Flag