import axios from 'axios';
import Country from '../seperate parts/Country/Country';

const URL = 'https://covid19.mathdro.id/api';

//call api to fetch total of all data, confirmed, recovered, etc.
export const getData = async () => {
    try { //if fetch is successful

        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(URL); //use library to make a request

        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        };
    } catch (error) { //if unsuccessful

    }
}

//call api to fetch daily corona data
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${URL}/daily`);
        return data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
    } catch (error) {
        return error;
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${URL}/countries`);
        return countries.map((country) => {
            return country.name;
        })
    } catch (error) {
        return error;
    }
}