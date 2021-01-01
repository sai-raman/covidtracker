import React, { Component } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css'
import { fetchData } from './api';
import covidImage from './images/covid.png'

export default class App extends Component {

    state = {
        covidData: {},
        country: ''
    }

    async componentDidMount() {
        const data = await fetchData();
        this.setState({ covidData: data });
    }


    onCountryChange = async (country) => {
        const data = await fetchData(country);
        this.setState({ covidData: data, country });
    }

    render() {
        const { covidData, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} alt="COVID-19" src={covidImage} />
                <Cards data={covidData} country={country} />
                <CountryPicker onCountryChange={this.onCountryChange} />
                <Chart data={covidData} country={country} />
            </div>
        );
    }
}