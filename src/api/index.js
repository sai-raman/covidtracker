import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let dynamicGetUrl = country ? `${url}/countries/${country}` : url;
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(dynamicGetUrl);
        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
    } catch (error) {
        console.log(error);

    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        return data;
    } catch (error) {
        console.log(error);

    }
}

export const getCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}