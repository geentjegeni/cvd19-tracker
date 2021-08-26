import axios from "axios";

export const getAllCountries = () => {
    return axios.get("https://disease.sh/v3/covid-19/countries")
        .then(response => response.data)
        .catch(err => console.log(err))
}

export const getAllUsStates = () => {
    return axios.get("https://disease.sh/v3/covid-19/states\n")
        .then(response => response.data)
        .catch(err => console.log(err))
}

export const getOneState = (stateName) => {
    return axios.get(`https://disease.sh/v3/covid-19/states/${stateName}`)
        .then(response => response.data)
        .catch(err => console.log(err))
}

export const getData = () => {
  return axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=7')
        .then(response => response.data)
        .catch(err => err)
}

export const getWorldData = () => {
    return axios.get('https://disease.sh/v3/covid-19/all')
        .then(response => response.data)
        .catch(err => err)
}