import React from 'react'
import './styles.css'
import Block from './Block'
import {Link} from 'react-router-dom'

function Countries ({countries, debouncedValue}){
    console.log(countries)
    console.log(debouncedValue)
    return(

        <div className="countries">
          {countries.map((country) => (
                <Link 
                    to={{
                        pathname: '/Country', 
                        countryName: country.name
                      }}
                    className="link"> 
                    <Block 
                        flag={country.flag}
                        title= {country.name}
                        population={country.population}
                        region={country.region}
                        capital={country.capital}
                    />
                </Link>) 
            )}

        </div>
    )
} export default Countries