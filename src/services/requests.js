import api from './api'

export const getAllCountries = () => api.get('/all')

export const getCountryByName = (countryName) => api.get(`/name/${countryName}`)

export const getCountriesByRegion = (region) =>  api.get(`/region/${region}`)