import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { getCountries } from '../../api';

const CountryPicker = ({ onCountryChange }) => {
	const [fetchedCountries, setFetchedCountries] = useState([]);
	useEffect(() => {
		const fetchCountries = async () => {
			setFetchedCountries(await getCountries());
		};
		fetchCountries();
	}, [setFetchedCountries]);
	return (
		<FormControl className={styles.formControl}>
			<NativeSelect defaultValue="" onChange={(event) => onCountryChange(event.target.value)}>
				<option value="">Global</option>
				{fetchedCountries.map((country, i) => (
					<option value={country} key={i}>
						{country}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
};

export default CountryPicker;
