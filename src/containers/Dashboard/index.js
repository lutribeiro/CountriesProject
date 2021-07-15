import React, {useEffect, useState} from 'react'
import './styles.css'
import {getAllCountries, 
        getCountriesByRegion, 
        getCountryByName} 
from '../../services/requests'
import {useDebounce} from 'use-debounce'

import Search from '../../components/Search'
import Countries from '../../components/Countries'



function Index(){
  
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState()
  const debouncedValue = useDebounce(countries, 1000)


  const filterByName= async (countryName) => {
    try{
      const response = await getCountryByName(countryName)
      setCountries (response.data)
      console.log(response)
    } catch (error) { 
        console.log(error) 
      } finally{
          } 
  }
  const filterByRegion = async (region) => {
    try{
      setIsLoading(true)
      const response = await getCountriesByRegion(region)
      setCountries (response.data)
      console.log(response)
    } catch (error) { 
         console.log(error) 
      } finally{
          setIsLoading(false)
          } 
  }

  useEffect(() =>{
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await getAllCountries()
        console.log(response)
        setCountries(response.data)
      } catch (error) {
       console.log(error)
      }  finally{
        setIsLoading(false)
        } 
    }
    fetchData()

  }, []) 

  if (isLoading)  {
    return(
        <p>Loading...</p>
    )
}

    return (
        <div className="containerDashboard">
            <Search 
              filterByRegion={filterByRegion}
              filterByName={filterByName}/>
            <Countries 
              countries={countries}
              debouncedValue={debouncedValue}/>  
        </div>
  
    )
} export default Index