import axios from 'axios';

const url = 'http://covid19.mathdro.id/api';


export const fetchData = async(country) =>{
    let changeableUrl = url;

     if(country){
         changeableUrl = `${url}/countries/${country}`;
     }

    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl);
        
        return { confirmed, recovered, deaths, lastUpdate} 

    } catch (error) {
        console.log(error)
    }
}

export const fetchDailyData = async() =>{
    try {
        const {data} = await axios.get(`${url}/daily`)
       
        const modifyData = data.map( (dailyData, index) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))

        return modifyData;
    
    } catch (error) {
        console.log(error)
    }
}

export const fetchCountries = async() => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`)

        const countryList = countries.map((country) => country.name);
        return countryList;

    } catch (error) {
        console.log(error)
    }
}