import axios from 'axios';

const url = 'http://covid19.mathdro.id/api';

export const fetchData = async() =>{
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);
        
        return { confirmed, recovered, deaths, lastUpdate} 

    } catch (error) {
        return error;
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
        
    }
}