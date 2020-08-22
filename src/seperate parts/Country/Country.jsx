import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl, StylesProvider } from '@material-ui/core';

import styles from './Country.module.css';

import { fetchCountries } from '../../API';
const Country = () => {

    const [allCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries]);

    console.log(allCountries)



    return (
        <FormControl className={styles.formControl} >
            <NativeSelect>
                <option value="global">Global</option>
                {allCountries.map((country, i) =>
                    <option key={i} value={country}>{country} </option>
                )}
            </NativeSelect>
        </FormControl>
    )
}

export default Country;