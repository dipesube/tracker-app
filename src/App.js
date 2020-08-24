import React from 'react';

import Cards from './seperate parts/Card/Cards';
import Chart from './seperate parts/Chart/Chart';
import Country from './seperate parts/Country/Country';
import { getData } from './API';
import styles from './App.module.css';
import image from './images/covid19_logo.png';



class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const data = await getData();
        this.setState({ data })
    }

    handleCountryChange = async (country) => {
        const data = await getData(country)
        console.log(data)
        this.setState({ data, country })
    }

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19" />
                <Cards data={data} />
                <Country className={styles.pad} handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />

            </div>
        )
    }
}
export default App;